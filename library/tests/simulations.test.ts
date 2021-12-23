import { Calculator, Snapshot } from "wpk";

const date = new Date();
const snapshot = new Snapshot(date, -100, 700, 1000, 3);

describe('handel', function () {
    it('kauf', function () {
        let resultBuy = Calculator.siumulate(snapshot, { 'volume': 100 }, 'handel');
        expect(JSON.stringify(new Snapshot(date, -200, 770, 1100, 3))).toEqual(JSON.stringify(resultBuy));
    });
    it('verkauf', function () {
        let resultSell = Calculator.siumulate(snapshot, { 'volume': -100 }, 'handel');
        expect(JSON.stringify(new Snapshot(date, 0, 630, 900, 3))).toEqual(JSON.stringify(resultSell));
    });
});
describe('sparplan', function () {
    it('1 Jahr, 100 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 100 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -103.04159569135076, 1540, 2200, 3))).toEqual(JSON.stringify(result));
    });
    it('2 Jahre, 100 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 100 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -106.17570442619791, 2380, 3400, 3))).toEqual(JSON.stringify(result));
    });
    it('1 Jahr, 50 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 50 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -712.8815318071727, 1540, 2200, 3))).toEqual(JSON.stringify(result));
    });
    it('2 Jahre, 50 % Eigenkapital', function () {
        let result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 50 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -1344.404441878877, 2380, 3400, 3))).toEqual(JSON.stringify(result));
    });
});
describe('price_change', function() {
    it('+10 %', function() {
        let result = Calculator.siumulate(snapshot, { 'price_change': +10 }, 'price_change');
        expect(JSON.stringify(new Snapshot(date, -100, 770, 1100, 3))).toEqual(JSON.stringify(result));
    });
    it('-10 %', function() {
        let result = Calculator.siumulate(snapshot, { 'price_change': -10 }, 'price_change');
        expect(JSON.stringify(new Snapshot(date, -100, 630, 900, 3))).toEqual(JSON.stringify(result));
    });
});