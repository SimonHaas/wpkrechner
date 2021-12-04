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
class Simulation {
    constructor(title, description, simulation) {
        this._title = title;
        this._description = description;
        this._simulation = simulation;
    }
}
exports.Simulation = Simulation;
class Calculator {
    static value(snapshot, calculation) {
        return Calculator.calculations[calculation]._calculation(snapshot);
    }
    static siumulate(snapshot, additionalInputs, simulation) {
        return Calculator.simulations[simulation]._simulation(snapshot, additionalInputs);
    }
}
exports.Calculator = Calculator;
Calculator.calculations = {
    'Beleihungsquote': new Calculation('Beleihungsquote', 'das Verhältnis vom Kreditrahmen zum Depotwert', (snapshot) => { return snapshot.creditLine / snapshot.volume; }),
    'Kreditbeanspruchung': new Calculation('Kreditbeanspruchung', 'wie weit der Beleihungswert ausgenutzt ist', (snapshot) => { return snapshot.balance / snapshot.creditLine * -1; }),
};
Calculator.simulations = {
    'verkauf': new Simulation('Verkauf', 'Wie wirken sich Verkäufe auf den Kredit aus?', (snapshot, additionalInputs) => {
        console.log({ additionalInputs });
        let volume = additionalInputs['volume'];
        console.log({ volume });
        let newSnapshot = snapshot.clone();
        // Beleihungsquote ausrechnen
        let beleihungsquote = Calculator.value(snapshot, 'Beleihungsquote');
        // Verkaufvolumen vom Depotvolumen abziehen
        newSnapshot.volume -= additionalInputs['volume'];
        // Verkaufvolumen dem Konto gutschreiben
        newSnapshot.balance += additionalInputs['volume'];
        // neue Kreditlinie ermitteln
        newSnapshot.creditLine = newSnapshot.volume * beleihungsquote;
        // return neuen Snapshot ohne weitere Felder
        return newSnapshot;
    })
};
