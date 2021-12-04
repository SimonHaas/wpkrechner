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
        'verkauf': new Simulation('Verkauf', 'Wie wirken sich Verkäufe auf den Kredit aus?', (snapshot, additionalInputs) => {

            console.log({additionalInputs})
            let volume = additionalInputs['volume']
            console.log({volume})

            let newSnapshot = snapshot.clone()

            // Beleihungsquote ausrechnen
            let beleihungsquote = Calculator.value(snapshot, 'Beleihungsquote')

            // Verkaufvolumen vom Depotvolumen abziehen
            newSnapshot.volume -= additionalInputs['volume']

            // Verkaufvolumen dem Konto gutschreiben
            newSnapshot.balance += additionalInputs['volume']

            // neue Kreditlinie ermitteln
            newSnapshot.creditLine = newSnapshot.volume * beleihungsquote

            // return neuen Snapshot ohne weitere Felder
            return newSnapshot
        })
    }

    public static siumulate(snapshot: Snapshot, additionalInputs: Record<string, number>, simulation: string): [Snapshot, Record<string, number>] | Snapshot
    {
        return Calculator.simulations[simulation]._simulation(snapshot, additionalInputs)
    }
}
