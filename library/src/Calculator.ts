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

export class Calculator {
    public static readonly calculations: Record<string, Calculation> = {
        'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot: Snapshot) => { return snapshot.creditLine / snapshot.volume }),
        'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot: Snapshot) => { return snapshot.balance / snapshot.creditLine * -1 }),
    }

    public static value(snapshot: Snapshot, calculation: string) {
        return Calculator.calculations[calculation]._calculation(snapshot)
    }
}
