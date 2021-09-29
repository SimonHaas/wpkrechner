import { Snapshot } from "./Snapshot";

type CalculationFunction = (snapshot: Snapshot) => number

class Calculation {
    readonly title: string
    readonly description: string
    readonly calculation: CalculationFunction

    constructor(title: string, description: string, calculation: CalculationFunction) {
        this.title = title
        this.description = description
        this.calculation = calculation
    }
}

export class Calculator {
    private static calculations: Record<string, Calculation> = {
        'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot: Snapshot) => { return snapshot.creditLine / snapshot.volume }),
        'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot: Snapshot) => { return snapshot.balance / snapshot.creditLine * -1 }),
    }

    public static value(snapshot: Snapshot, calculation: string) {
        return Calculator.calculations[calculation].calculation(snapshot)
    }
}
