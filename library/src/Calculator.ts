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
        'Sollzinsen': new Calculation("Sollzinsen p.a.", 'In einem Jahr fällige Zinszahlungen', (snapshot) => { return snapshot.balance * snapshot.interestRate }),
        'Verfügbarer Betrag': new Calculation('Verfügbarer Betrag', 'um wie viel der Kredit noch genutzt werden kann', (snapshot) => { return snapshot.creditLine + snapshot.balance }),
        'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot) => { return snapshot.creditLine / snapshot.volume }),
        'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot) => { return snapshot.balance / snapshot.creditLine * -1 }),
        'Eigenkapital': new Calculation('Eigenkapital', 'Höhe des Eigenkapitals', (snapshot) => { return snapshot.volume + snapshot.balance }),
        'Eigenkapitalquote': new Calculation('Eigenkapitalquote', 'Verhältnis von Eigenkapital zum gesamten Depotvolumen', (snapshot) => { return (snapshot.volume + snapshot.balance) / snapshot.volume }),
        'Verschuldungsgrad': new Calculation('Verschuldungsgrad', 'Ein Verschuldungsgrad von 20 % bedeutet, dass für 100 € Eigenkapital 20 € Fremdkapital aufgenommen wurde.', (snapshot) => { return snapshot.balance / (snapshot.volume + snapshot.balance) })
    }

    public static value(snapshot: Snapshot, calculation: string) {
        return Calculator.calculations[calculation]._calculation(snapshot)
    }
}
