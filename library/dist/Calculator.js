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
// TODO keys in Konstanten auslagern
Calculator.calculations = {
    'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot) => { return snapshot.creditLine / snapshot.volume; }),
    'Sollzinsen': new Calculation('Sollzinsen p.a.', 'In einem Jahr fällige Zinszahlungen', (snapshot) => { return snapshot.balance * snapshot.interestRate * 0.01; }),
    'hebel': new Calculation('Hebel', 'Wie stark ist das Eigenkapital gehebelt?', (snapshot) => { return snapshot.volume / Calculator.value(snapshot, 'Eigenkapital'); }),
    'Verfügbarer Betrag': new Calculation('Verfügbarer Betrag', 'um wie viel der Kredit noch genutzt werden kann', (snapshot) => { return snapshot.creditLine + snapshot.balance; }),
    'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot) => { return snapshot.balance / snapshot.creditLine * -1; }),
    'Eigenkapital': new Calculation('Eigenkapital', 'Höhe des Eigenkapitals', (snapshot) => { return snapshot.volume + snapshot.balance; }),
    'Eigenkapitalquote': new Calculation('Eigenkapitalquote', 'Verhältnis von Eigenkapital zum gesamten Depotvolumen', (snapshot) => { return (snapshot.volume + snapshot.balance) / snapshot.volume; }),
    'Verschuldungsgrad': new Calculation('Verschuldungsgrad', 'Ein Verschuldungsgrad von 20 % bedeutet, dass für 100 € Eigenkapital 20 € Fremdkapital aufgenommen wurde.', (snapshot) => { return -snapshot.balance / Calculator.value(snapshot, 'Eigenkapital'); }),
    'verkraftbarer_Kursrückgang': new Calculation('verkraftbarer Kursrückgang', 'Wie weit kann das Depotvolumen sinken ohne, dass der in Anspruch genommene Kredit den Beleihungswert übersteigt?', (snapshot) => { return snapshot.volume - (snapshot.balance / Calculator.value(snapshot, 'Beleihungsquote') * -1); }),
    'maximales_Depotvolumen': new Calculation('maximales Depotvolumen', 'Theoretisch maximales Depotvolumen wenn Kredit immer wieder reinvestiert wird und Beleihungswert gleich den Schulden ist', (snapshot) => { return (1 / (1 - Calculator.value(snapshot, 'Beleihungsquote')) * snapshot.volume); }),
    'maximales_Fremdkapital': new Calculation('maximales Fremdkapital', 'Theoretisch maximales Fremdkapital bei Erreichung des maximalen Depotvolumens', (snapshot) => { return Calculator.value(snapshot, 'maximales_Depotvolumen') - Calculator.value(snapshot, 'Eigenkapital'); }),
    'maximale_Neuinvestition': new Calculation('maximale Neuinvestition', 'Theoretisch maximal mögliche Neuinvestition in Wertpapiere um das maximale Depotvolumen zu erreichen', (snapshot) => { return Calculator.value(snapshot, 'maximales_Fremdkapital') + snapshot.balance; }),
};
