import { Calculator, Snapshot } from "wpk";

const date = new Date();
const snapshot = new Snapshot(date, -100, 700, 1000, 3);

describe('calculations', function () {
    it('handel', function () {
        let resultBuy = Calculator.siumulate(snapshot, { 'volume': 100 }, 'handel');
        expect(JSON.stringify(new Snapshot(date, -200, 770, 1100, 3))).toEqual(JSON.stringify(resultBuy));

        let resultSell = Calculator.siumulate(snapshot, { 'volume': -100 }, 'handel');
        expect(JSON.stringify(new Snapshot(date, 0, 630, 900, 3))).toEqual(JSON.stringify(resultSell));
    });
    it('sparplan', function () {
        // 1 Jahr, 100 % Eigenkapital
        let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 100 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -103.04159569135076, 1540, 2200, 3))).toEqual(JSON.stringify(result));

        // 2 Jahr, 100 % Eigenkapital
        result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 100 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -106.17570442619791, 2380, 3400, 3))).toEqual(JSON.stringify(result));

        // 1 Jahr, 50 % Eigenkapital
        result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 50 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -712.8815318071727, 1540, 2200, 3))).toEqual(JSON.stringify(result));

        // 2 Jahr, 50 % Eigenkapital
        result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 50 }, 'sparplan');
        expect(JSON.stringify(new Snapshot(date, -1344.404441878877, 2380, 3400, 3))).toEqual(JSON.stringify(result));
    });
});