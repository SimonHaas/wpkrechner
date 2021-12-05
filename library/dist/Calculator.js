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
    'handel': new Simulation('Verkauf/Kauf', 'Wie wirken sich Verkäufe/Käufe auf den Kredit aus?', (snapshot, additionalInputs) => {
        // positives Volumen bedeutet Kauf, negatives Volumen bedeutet Verkauf
        let volume = additionalInputs['volume'];
        let newSnapshot = snapshot.clone();
        // Beleihungsquote ausrechnen
        let beleihungsquote = Calculator.value(snapshot, 'Beleihungsquote');
        // Verkaufvolumen vom Depotvolumen abziehen
        newSnapshot.volume += volume;
        // Verkaufvolumen dem Konto gutschreiben
        newSnapshot.balance -= volume;
        // neue Kreditlinie ermitteln
        newSnapshot.creditLine = newSnapshot.volume * beleihungsquote;
        // return neuen Snapshot ohne weitere Felder
        return newSnapshot;
    }),
    'sparplan': new Simulation('Sparplan', 'Wie wirkt sich ein Sparplan auf den Kredit aus?', (snapshot, additionalInputs) => {
        let jahre = additionalInputs['years'];
        let sparrate = additionalInputs['rate'];
        let eigenkapital = additionalInputs['equity'];
        let newSnapshot = snapshot.clone();
        for (let i = 0; i < jahre * 12; i++) {
            newSnapshot = Calculator.siumulate(newSnapshot, { 'volume': sparrate }, 'handel');
            //TODO Zinsen über eine Calculation abbilden
        }
        //TODO noch theoretisch maximale Laufzeit ausgeben, angefallene Zinzzahlungen während des Sparplans
        return newSnapshot;
    })
};
