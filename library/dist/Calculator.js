"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculation {
    constructor(title, description, calculation) {
        this.title = title;
        this.description = description;
        this.calculation = calculation;
    }
}
class Calculator {
    static value(snapshot, calculation) {
        return Calculator.calculations[calculation].calculation(snapshot);
    }
}
exports.Calculator = Calculator;
Calculator.calculations = {
    'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot) => { return snapshot.creditLine / snapshot.volume; }),
    'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot) => { return snapshot.balance / snapshot.creditLine * -1; }),
};
