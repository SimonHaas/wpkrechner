import { Snapshot } from "./Snapshot";

type CalculationFunction = (snapshot: Snapshot) => number

export class Calculation {
    readonly _title: string
    readonly _description: string
    readonly _calculation: CalculationFunction

    constructor(title: string, description: string, calculation: CalculationFunction) {
        this._title = title
        this._description = description
        this._calculation = calculation
    }
}

export class SimulationOutput {
    private _snapshot: Snapshot
    private _additionalOutputs: Record<string, number>

    constructor(snapshot: Snapshot, additionalOutputs: Record<string, number> = null) {
        this._snapshot = snapshot
        this._additionalOutputs = additionalOutputs
    }

    public get snapshot() {
        return this._snapshot
    }

    public set snapshot(snapshot: Snapshot) {
        this._snapshot = snapshot
    }

    public get additionalOutputs() {
        return this._additionalOutputs
    }

    public set additionalOutputs(additionalOutputs: Record<string, number>) {
        this._additionalOutputs = additionalOutputs
    }
}

//TODO SimulationInput als eigene Klasse
type SimulationFunction = (snapshot: Snapshot, additionalInputs: Record<string, number>) => SimulationOutput

export class Simulation {
    readonly _title: string
    readonly _description: string
    readonly _simulation: SimulationFunction

    constructor(title: string, description: string, simulation: SimulationFunction) {
        this._title = title
        this._description = description
        this._simulation = simulation
    }
}

export class Calculator {
    // TODO keys in Konstanten auslagern
    public static readonly calculations: Record<string, Calculation> = {
        'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot) => { return snapshot.creditLine / snapshot.volume }),
        'Sollzinsen': new Calculation('Sollzinsen p.a.', 'In einem Jahr fällige Zinszahlungen', (snapshot) => { return snapshot.balance * snapshot.interestRate * 0.01 }),
        'hebel': new Calculation('Hebel', 'Wie stark ist das Eigenkapital gehebelt?', (snapshot) => { return snapshot.volume / Calculator.value(snapshot, 'Eigenkapital') }),
        'Verfügbarer Betrag': new Calculation('Verfügbarer Betrag', 'um wie viel der Kredit noch genutzt werden kann', (snapshot) => { return snapshot.creditLine + snapshot.balance }),
        'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot) => { return snapshot.balance / snapshot.creditLine * -1 }),
        'Eigenkapital': new Calculation('Eigenkapital', 'Höhe des Eigenkapitals', (snapshot) => { return snapshot.volume + snapshot.balance }),
        'Eigenkapitalquote': new Calculation('Eigenkapitalquote', 'Verhältnis von Eigenkapital zum gesamten Depotvolumen', (snapshot) => { return (snapshot.volume + snapshot.balance) / snapshot.volume }),
        'Verschuldungsgrad': new Calculation('Verschuldungsgrad', 'Ein Verschuldungsgrad von 20 % bedeutet, dass für 100 € Eigenkapital 20 € Fremdkapital aufgenommen wurde.', (snapshot) => { return - snapshot.balance / Calculator.value(snapshot, 'Eigenkapital') }),
        'verkraftbarer_Kursrückgang': new Calculation('verkraftbarer Kursrückgang', 'Wie weit kann das Depotvolumen sinken ohne, dass der in Anspruch genommene Kredit den Beleihungswert übersteigt?', (snapshot) => { return snapshot.volume - (snapshot.balance / Calculator.value(snapshot, 'Beleihungsquote') * -1) }),
        'maximales_Depotvolumen': new Calculation('maximales Depotvolumen', 'Theoretisch maximales Depotvolumen wenn Kredit immer wieder reinvestiert wird und Beleihungswert gleich den Schulden ist', (snapshot) => { return (1 / (1 - Calculator.value(snapshot, 'Beleihungsquote')) * snapshot.volume)}),
        'maximales_Fremdkapital': new Calculation('maximales Fremdkapital', 'Theoretisch maximales Fremdkapital bei Erreichung des maximalen Depotvolumens', (snapshot) => { return Calculator.value(snapshot, 'maximales_Depotvolumen') - Calculator.value(snapshot, 'Eigenkapital') }),
        'maximale_Neuinvestition': new Calculation('maximale Neuinvestition', 'Theoretisch maximal mögliche Neuinvestition in Wertpapiere um das maximale Depotvolumen zu erreichen', (snapshot) => { return  Calculator.value(snapshot, 'maximales_Fremdkapital') + snapshot.balance }),
        //'margin': new Calculation('Margin', 'Sicherheitspuffer', (snapshot) => { return 100 - (snapshot.balance / Calculator.value(snapshot, 'Eigenkapital')) })
    }

    public static value(snapshot: Snapshot, calculation: string): number
    {
        return Calculator.calculations[calculation]._calculation(snapshot)
    }

    public static readonly simulations: Record<string, Simulation> = {
        'handel': new Simulation('Verkauf/Kauf', 'Wie wirken sich Verkäufe/Käufe auf den Kredit aus?', (snapshot, additionalInputs) => {
            // positives Volumen bedeutet Kauf, negatives Volumen bedeutet Verkauf
            let volume: number = additionalInputs['volume']
            let newSnapshot = snapshot.clone()

            // Beleihungsquote ausrechnen
            let beleihungsquote = Calculator.value(snapshot, 'Beleihungsquote')

            // Verkaufvolumen vom Depotvolumen abziehen
            newSnapshot.volume += volume

            // Verkaufvolumen dem Konto gutschreiben
            newSnapshot.balance -= volume

            // neue Kreditlinie ermitteln
            newSnapshot.creditLine = newSnapshot.volume * beleihungsquote

            // return neuen Snapshot ohne weitere Felder
            return new SimulationOutput(newSnapshot)
        }),
        'sparplan': new Simulation('Sparplan', 'Wie wirkt sich ein Sparplan auf den Kredit aus?', (snapshot, additionalInputs) => {
            let jahre = additionalInputs['years']
            let sparrate = additionalInputs['rate']
            let eigenkapital = additionalInputs['equity']
            let newSnapshot = snapshot.clone()

            for (let i = 0; i < jahre * 12; i++) {
                newSnapshot = Calculator.siumulate(newSnapshot, {'volume': sparrate}, 'handel').snapshot
                newSnapshot.balance += eigenkapital
                newSnapshot = Calculator.siumulate(newSnapshot, { 'years': 1/12, 'balanceChange': 0 }, 'interest').snapshot
            }

            //TODO noch theoretisch maximale Laufzeit ausgeben und angefallene Zinzzahlungen während des Sparplans
            return new SimulationOutput(newSnapshot)
        }),
        'interest': new Simulation('Zinsen', 'Wie wirkten sich die Zinsen im Laufe der Zeit auf den Kredit aus?', (snapshot, additionalInputs) => {
            let jahre = additionalInputs['years']
            let balanceChange = additionalInputs['balanceChange']
            let newSnapshot = snapshot.clone()

            for (let i = 0; i < jahre * 12; i++) {
                newSnapshot.balance += balanceChange / (jahre * 12)
                newSnapshot.balance += newSnapshot.balance * (newSnapshot.interestRate / 100 / 12)
            }

            return new SimulationOutput(newSnapshot)
        }),
        'price_change': new Simulation('Kursveränderungen', 'Wie wirkten sich Kursveränderungen auf den Kredit aus?', (snapshot, additionalInputs) => {
            let priceChange = additionalInputs['price_change']
            let newSnapshot = snapshot.clone()

            let beleihungsquote = Calculator.value(snapshot, 'Beleihungsquote')
            newSnapshot.volume = snapshot.volume * (1 + priceChange / 100)
            newSnapshot.creditLine = newSnapshot.volume * beleihungsquote

            return new SimulationOutput(newSnapshot)
        }),
    }

    public static siumulate(snapshot: Snapshot, additionalInputs: Record<string, number>, simulation: string): SimulationOutput
    {
        return Calculator.simulations[simulation]._simulation(snapshot, additionalInputs)
    }
}
