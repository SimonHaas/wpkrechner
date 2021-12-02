"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculation {
    constructor(title, description, calculation) {
        this._title = title;
        this._description = description;
        this._calculation = calculation;
    }
}
exports.Calculation = Calculation;
class Calculator {
    static value(snapshot, calculation) {
        return Calculator.calculations[calculation]._calculation(snapshot);
    }
}
exports.Calculator = Calculator;
Calculator.calculations = {
    'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot) => { return snapshot.creditLine / snapshot.volume; }),
    'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot) => { return snapshot.balance / snapshot.creditLine * -1; }),
    /*test*/
    'Verfügbarer Betrag': new Calculation('Verfügbarer Betrag', 'Um wie viel der Kredit noch genutzt werden kann', (snapshot) => {return snapshot.creditLine * snapshot.balance}),
};
