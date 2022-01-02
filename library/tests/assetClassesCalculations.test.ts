import { AssetClass, Calculator, Snapshot } from "wpk";
import { SimulationOutput } from "wpk";

const date = new Date();
const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 500)
const snapshot = new Snapshot(date, -100, 700, 1000, 3, [assetClass1, assetClass2]);

describe('virtuelle Anlageklasse', function () {
    it('0,0', function () {
        const date = new Date();
        const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
        const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 600)
        const snapshot = new Snapshot(date, -100, 460, 1000, 3, [assetClass1, assetClass2]);

        expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0, 0), assetClass1, assetClass2])
    })
    it('+100', function () {
        const date = new Date();
        const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
        const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 500)
        const snapshot = new Snapshot(date, -100, 460, 1000, 3, [assetClass1, assetClass2]);

        expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0.3, 100), assetClass1, assetClass2])
    })
    it('-100', function () {
        const date = new Date();
        const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 450)
        const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 650)
        const snapshot = new Snapshot(date, -100, 460, 1000, 3, [assetClass1, assetClass2]);

        expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0.5, -100), assetClass1, assetClass2])
    })
})

// describe('handel', function () {
//     it('kauf', function () {
//         let result = Calculator.siumulate(snapshot, { 'volume': 100 }, 'handel');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -200, 770, 1100, 3)))).toEqual(JSON.stringify(result));
//     });
//     it('verkauf', function () {
//         let result = Calculator.siumulate(snapshot, { 'volume': -100 }, 'handel');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, 0, 630, 900, 3)))).toEqual(JSON.stringify(result));
//     });
// });
// describe('sparplan', function () {
//     it('1 Jahr, 100 % Eigenkapital', function () {
//         let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 100 }, 'sparplan');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -103.04159569135076, 1540, 2200, 3)))).toEqual(JSON.stringify(result));
//     });
//     it('2 Jahre, 100 % Eigenkapital', function () {
//         let result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 100 }, 'sparplan');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -106.17570442619791, 2380, 3400, 3)))).toEqual(JSON.stringify(result));
//     });
//     it('1 Jahr, 50 % Eigenkapital', function () {
//         let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 50 }, 'sparplan');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -712.8815318071727, 1540, 2200, 3)))).toEqual(JSON.stringify(result));
//     });
//     it('2 Jahre, 50 % Eigenkapital', function () {
//         let result = Calculator.siumulate(snapshot, { 'years': 2, 'rate': 100, 'equity': 50 }, 'sparplan');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -1344.404441878877, 2380, 3400, 3)))).toEqual(JSON.stringify(result));
//     });
// });
// describe('price_change', function() {
//     it('+10 %', function() {
//         let result = Calculator.siumulate(snapshot, { 'price_change': +10 }, 'price_change');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 770, 1100, 3)))).toEqual(JSON.stringify(result));
//     });
//     it('-10 %', function() {
//         let result = Calculator.siumulate(snapshot, { 'price_change': -10 }, 'price_change');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 630, 900, 3)))).toEqual(JSON.stringify(result));
//     });
// });

// describe('interest', function() {
//     it('5 Jahre, 100 mehr Kredit', function() {
//         let result = Calculator.siumulate(snapshot, { 'years': 5, 'balanceChange': -100 }, 'interest');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -224.1755604949684, 700, 1000, 3)))).toEqual(JSON.stringify(result));
//     });
//     it('5 Jahre, 100 Tilgung', function() {
//         let result = Calculator.siumulate(snapshot, { 'years': 5, 'balanceChange': 100 }, 'interest');
//         expect(JSON.stringify(new SimulationOutput(new Snapshot(date, -8.147795816085829, 700, 1000, 3)))).toEqual(JSON.stringify(result));
//     });
// });
