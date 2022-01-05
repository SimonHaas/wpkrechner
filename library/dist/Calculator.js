"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.Simulation = exports.SimulationOutput = exports.Calculation = void 0;
class Calculation {
    constructor(title, description, calculation) {
        this._title = title;
        this._description = description;
        this._calculation = calculation;
    }
}
exports.Calculation = Calculation;
class SimulationOutput {
    constructor(snapshot, additionalOutputs = null) {
        this._snapshot = snapshot;
        this._additionalOutputs = additionalOutputs;
    }
    get snapshot() {
        return this._snapshot;
    }
    set snapshot(snapshot) {
        this._snapshot = snapshot;
    }
    get additionalOutputs() {
        return this._additionalOutputs;
    }
    set additionalOutputs(additionalOutputs) {
        this._additionalOutputs = additionalOutputs;
    }
}
exports.SimulationOutput = SimulationOutput;
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
    //'margin': new Calculation('Margin', 'Sicherheitspuffer', (snapshot) => { return 100 - (snapshot.balance / Calculator.value(snapshot, 'Eigenkapital')) })
};
Calculator.simulations = {
    'handel': new Simulation('Verkauf/Kauf', 'Wie wirken sich Verkäufe/Käufe auf den Kredit aus?', (snapshot, additionalInputs) => {
        // positives Volumen bedeutet Kauf, negatives Volumen bedeutet Verkauf
        const volume = additionalInputs['volume'];
        const assetClassIndex = additionalInputs['assetClassIndex'];
        if (assetClassIndex == null) {
            const fractionToTrade = volume / snapshot.volume;
            let tempSnapshot = snapshot.clone();
            let result;
            for (let i = 0; i < snapshot.assetClasses.length; i++) {
                const volumeToTrade = snapshot.assetClasses[i].volume * fractionToTrade;
                result = Calculator.siumulate(tempSnapshot, { 'volume': volumeToTrade, 'assetClassIndex': i }, 'handel');
                tempSnapshot = result.snapshot;
            }
            return result;
        }
        const newSnapshot = snapshot.clone();
        const newAssetClass = newSnapshot.assetClasses[assetClassIndex];
        const loanToValue = newAssetClass.loanToValue;
        // Verkaufvolumen vom Depotvolumen abziehen
        newSnapshot.volume += volume;
        newAssetClass.volume += volume;
        // Verkaufvolumen dem Konto gutschreiben
        newSnapshot.balance -= volume;
        // neue Kreditlinie ermitteln
        newSnapshot.creditLine = newSnapshot.creditLine + volume * loanToValue;
        return new SimulationOutput(newSnapshot);
    }),
    'sparplan': new Simulation('Sparplan', 'Wie wirkt sich ein Sparplan auf den Kredit aus?', (snapshot, additionalInputs) => {
        let jahre = additionalInputs['years'];
        let sparrate = additionalInputs['rate'];
        let eigenkapital = additionalInputs['equity'];
        let newSnapshot = snapshot.clone();
        for (let i = 0; i < jahre * 12; i++) {
            newSnapshot = Calculator.siumulate(newSnapshot, { 'volume': sparrate }, 'handel').snapshot;
            newSnapshot.balance += eigenkapital;
            newSnapshot = Calculator.siumulate(newSnapshot, { 'years': 1 / 12, 'balanceChange': 0 }, 'interest').snapshot;
        }
        //TODO noch theoretisch maximale Laufzeit ausgeben und angefallene Zinzzahlungen während des Sparplans
        return new SimulationOutput(newSnapshot);
    }),
    'interest': new Simulation('Zinsen', 'Wie wirkten sich die Zinsen im Laufe der Zeit auf den Kredit aus?', (snapshot, additionalInputs) => {
        let jahre = additionalInputs['years'];
        let balanceChange = additionalInputs['balanceChange'];
        let newSnapshot = snapshot.clone();
        for (let i = 0; i < jahre * 12; i++) {
            newSnapshot.balance += balanceChange / (jahre * 12);
            newSnapshot.balance += newSnapshot.balance * (newSnapshot.interestRate / 100 / 12);
        }
        return new SimulationOutput(newSnapshot);
    }),
    'price_change': new Simulation('Kursveränderungen', 'Wie wirkten sich Kursveränderungen auf den Kredit aus?', (snapshot, additionalInputs) => {
        let priceChange = additionalInputs['price_change'];
        let newSnapshot = snapshot.clone();
        let beleihungsquote = Calculator.value(snapshot, 'Beleihungsquote');
        newSnapshot.volume = snapshot.volume * (1 + priceChange / 100);
        newSnapshot.creditLine = newSnapshot.volume * beleihungsquote;
        return new SimulationOutput(newSnapshot);
    }),
};
