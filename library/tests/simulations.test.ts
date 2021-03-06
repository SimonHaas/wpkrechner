import { Calculator, Snapshot, SimulationOutput } from "@simonhaas/wpk-rechner";

const date = new Date();
const snapshot = new Snapshot(date, -100, 700, 1000, 3);

describe('handel', function () {
    it('kauf', function () {
        let result = Calculator.siumulate(snapshot, { 'volume': 100 }, 'handel');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -200, 770, 1100, 3))));
    });
    it('verkauf', function () {
        const availableFundsBefore = Calculator.value(snapshot, 'Verfügbarer Betrag');
        expect(availableFundsBefore).toBe(600);
        const simulationOutput = Calculator.siumulate(snapshot, { 'volume': -100 }, 'handel');
        expect(JSON.stringify(simulationOutput)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, 0, 630, 900, 3))));
        const availableFundsAfter = Calculator.value(simulationOutput.snapshot, 'Verfügbarer Betrag');
        expect(availableFundsAfter).toBe(630);
    });
});
describe('sparplan', function () {
    it('1 Jahr, 100 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 100 }, 'sparplan');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -103.04159569135076, 1540, 2200, 3))));
    });
    it('2 Jahre, 100 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 100 }, 'sparplan');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -106.17570442619791, 2380, 3400, 3))));
    });
    it('1 Jahr, 50 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 50 }, 'sparplan');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -712.8815318071727, 1540, 2200, 3))));
    });
    it('2 Jahre, 50 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 50 }, 'sparplan');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -1344.404441878877, 2380, 3400, 3))));
    });
});
describe('price_change', function() {
    it('+10 %', function() {
        let result = Calculator.siumulate(snapshot, { 'price_change': +10 }, 'price_change');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 770, 1100, 3))));
    });
    it('-10 %', function() {
        let result = Calculator.siumulate(snapshot, { 'price_change': -10 }, 'price_change');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 630, 900, 3))));
    });
});

describe('interest', function() {
    it('5 Jahre, 100 mehr Kredit', function() {
        let result = Calculator.siumulate(snapshot, { 'years': 5, 'balanceChange': -100 }, 'interest');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -224.1755604949684, 700, 1000, 3))));
    });
    it('5 Jahre, 100 Tilgung', function() {
        let result = Calculator.siumulate(snapshot, { 'years': 5, 'balanceChange': 100 }, 'interest');
        expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -8.147795816085829, 700, 1000, 3))));
    });
});
