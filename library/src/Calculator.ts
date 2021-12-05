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

//TODO SimulationInput und SimulationOutput als eigenen Typ
type SimulationFunction = (snapshot: Snapshot, additionalInputs: Record<string, number>) => [Snapshot, Record<string, number>] | Snapshot

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
    public static readonly calculations: Record<string, Calculation> = {
        'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot: Snapshot) => { return snapshot.creditLine / snapshot.volume }),
        'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot: Snapshot) => { return snapshot.balance / snapshot.creditLine * -1 }),
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
            return newSnapshot
        }),
        'sparplan': new Simulation('Sparplan', 'Wie wirkt sich ein Sparplan auf den Kredit aus?', (snapshot, additionalInputs) => {
            let jahre = additionalInputs['years']
            let sparrate = additionalInputs['rate']
            let eigenkapital = additionalInputs['equity']
            let newSnapshot = snapshot.clone()

            for (let i = 0; i < jahre * 12; i++) {
                newSnapshot = Calculator.siumulate(newSnapshot, {'volume': sparrate}, 'handel') as Snapshot
                //TODO Zinsen über eine Calculation abbilden
            }


            //TODO noch theoretisch maximale Laufzeit ausgeben, angefallene Zinzzahlungen während des Sparplans
            return newSnapshot
        })
    }

    public static siumulate(snapshot: Snapshot, additionalInputs: Record<string, number>, simulation: string): [Snapshot, Record<string, number>] | Snapshot
    {
        return Calculator.simulations[simulation]._simulation(snapshot, additionalInputs)
    }
}
