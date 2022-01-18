import { AssetClass, Calculator, SimulationOutput, Snapshot } from "wpk";

const date = new Date();
const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 500)
const snapshot = new Snapshot(date, -100, 700, 1000, 3, [assetClass1, assetClass2]);

describe('clone Snapshots', function () {
  it('2 AssetClasses', function () {
    const snapshot2 = new Snapshot(date, -100, 700, 1000, 3, [assetClass1, assetClass2]);
    snapshot2.activeAssetClasses = true
    snapshot2.generatedAssetClass = false
    const newSnapshot = snapshot2.clone()
    expect(JSON.stringify(newSnapshot)).toEqual(JSON.stringify(snapshot2))
  })
})
describe('virtuelle Anlageklasse', function () {
  it('0,0', function () {
    const date = new Date();
    const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
    const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 600)
    const snapshot = new Snapshot(date, -100, 460, 1000, 3, [assetClass1, assetClass2]);

    expect(snapshot.assetClasses[0]).toEqual(new AssetClass('generated', 0, 0))
    expect(snapshot.assetClasses[1]).toEqual(assetClass1)
    expect(snapshot.assetClasses[2]).toEqual(assetClass2)
    expect(snapshot.assetClasses[3]).toBeUndefined()
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
  it('eine neue Anlageklasse', function () {
    const date = new Date();
    const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
    const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 600)
    const snapshot = new Snapshot(date, -100, 460, 1000, 3, [assetClass1]);

    expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0.3, 600), assetClass1])

    snapshot.addAssetClass(assetClass2)

    expect(snapshot.assetClasses[0]).toEqual(new AssetClass('generated', 0, 0))
    expect(snapshot.assetClasses[1]).toEqual(assetClass1)
    expect(snapshot.assetClasses[2]).toEqual(assetClass2)
    expect(snapshot.assetClasses[3]).toBeUndefined()
    expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0, 0), assetClass1, assetClass2])
  })
  it('eine Anlageklasse weniger', function () {
    const date = new Date();
    const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400)
    const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 600)
    const snapshot = new Snapshot(date, -100, 460, 1000, 3, [assetClass1, assetClass2]);
    expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0, 0), assetClass1, assetClass2])

    snapshot.removeAssetClass(snapshot.assetClasses[2])

    expect(snapshot.assetClasses[0]).toEqual(new AssetClass('generated', 0.3, 600))
    expect(snapshot.assetClasses[1]).toEqual(assetClass1)
    expect(snapshot.assetClasses[2]).toBeUndefined()
    expect(snapshot.assetClasses).toEqual([new AssetClass('generated', 0.3, 600), assetClass1])
  })
})
describe('calculations', function () {
  it('Beleihungsquote', function () {
    let result = Calculator.value(snapshot, 'Beleihungsquote');
    expect(result).toBe(0.7);
  });
  it('Sollzinsen', function () {
    let result = Calculator.value(snapshot, 'Sollzinsen');
    expect(result).toBe(-3);
  });
  it('hebel', function () {
    let result = Calculator.value(snapshot, 'hebel');
    expect(result).toBeCloseTo(1.1111111);
  });
  it('Verfügbarer Betrag', function () {
    let result = Calculator.value(snapshot, 'Verfügbarer Betrag');
    expect(result).toBe(600);
  });
  it('Kreditbeanspruchung', function () {
    let result = Calculator.value(snapshot, 'Kreditbeanspruchung');
    expect(result).toBeCloseTo(0.142857);
  });
  it('Eigenkapital', function () {
    let result = Calculator.value(snapshot, 'Eigenkapital');
    expect(result).toBe(900);
  });
  it('Verschuldungsgrad', function () {
    let result = Calculator.value(snapshot, 'Verschuldungsgrad');
    expect(result).toBeCloseTo(0.1111111);
  });
  it('Eigenkapitalquote', function () {
    let result = Calculator.value(snapshot, 'Eigenkapitalquote');
    expect(result).toBe(0.9);
  });
  it('verkraftbarer_Kursrückgang', function () {
    let result = Calculator.value(snapshot, 'verkraftbarer_Kursrückgang');
    expect(result).toBeCloseTo(857.142857);
  });
  it('maximales_Depotvolumen', function () {
    let result = Calculator.value(snapshot, 'maximales_Depotvolumen');
    expect(result).toBeCloseTo(3333.333333);
  });
  it('maximale_Neuinvestition', function () {
    let result = Calculator.value(snapshot, 'maximale_Neuinvestition');
    expect(result).toBeCloseTo(2333.333333);
  });
  it('maximales_Fremdkapital', function () {
    let result = Calculator.value(snapshot, 'maximales_Fremdkapital');
    expect(result).toBeCloseTo(2433.333333);
  });
  it('volume_userInput', function () {
    let result = Calculator.value(snapshot, 'volume_userInput');
    expect(result).toBe(900);
  });
  it('creditLine_userInput', function () {
    let result = Calculator.value(snapshot, 'creditLine_userInput');
    expect(result).toBe(430);
  });
});
describe('handel', function () {
  it('kauf', function () {
    let result = Calculator.siumulate(snapshot, { 'volume': 100, 'assetClassIndex': 1 }, 'handel');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -200, 770, 1100, 3, [new AssetClass('Aktien im DAX', 0.7, 500), assetClass2]))));
  });
  it('verkauf', function () {
    let result = Calculator.siumulate(snapshot, { 'volume': -100, 'assetClassIndex': 1 }, 'handel');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, 0, 630, 900, 3, [new AssetClass('Aktien im DAX', 0.7, 300), assetClass2]))));
  });
  it('kauf ohne Angabe von assetClassIndex', function () {
    let result = Calculator.siumulate(snapshot, { 'volume': 100 }, 'handel');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -200, 770, 1100, 3, [new AssetClass('Aktien im DAX', 0.7, 440), new AssetClass('ausländische Aktien', 0.3, 550)]))));
  });
});
describe('sparplan', function () {
  it('1 Jahr, 100 % Eigenkapital ohne Angabe von assetClassIndex', function () {
    let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 100 }, 'sparplan');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -109.40514007728638, 1540, 2200, 3, [new AssetClass('Aktien im DAX', 0.7, 880), new AssetClass('ausländische Aktien', 0.3, 1100)]))));
  });
  it('1 Jahre, 100 % Eigenkapital assetClassIndex 1', function () {
    let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 100, 'assetClassIndex': 1 }, 'sparplan');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -103.04159569135076, 1540, 2200, 3, [new AssetClass('Aktien im DAX', 0.7, 1600), new AssetClass('ausländische Aktien', 0.3, 500)]))));
  });
  it('1 Jahr, 50 % Eigenkapital ohne Angabe von assetClassIndex', function () {
    let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 50 }, 'sparplan');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -730.4308134742649, 1540, 2200, 3, [new AssetClass('Aktien im DAX', 0.7, 880), new AssetClass('ausländische Aktien', 0.3, 1100)]))));
  });
  it('1 Jahre, 50 % Eigenkapital assetClassIndex 1', function () {
    let result = Calculator.siumulate(snapshot, { 'years': 1, 'rate': 100, 'equity': 50, 'assetClassIndex': 1 }, 'sparplan');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -712.8815318071727, 1540, 2200, 3, [new AssetClass('Aktien im DAX', 0.7, 1600), new AssetClass('ausländische Aktien', 0.3, 500)]))));
  });
});
describe('price_change', function () {
  it('+10 %  ohne Angabe von assetClassIndex', function () {
    let result = Calculator.siumulate(snapshot, { 'price_change': +10 }, 'price_change');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 770, 1100, 3, [new AssetClass('Aktien im DAX', 0.7, 440), new AssetClass('ausländische Aktien', 0.3, 550)]))));
  });
  it('+10 % assetClassIndex 1', function () {
    let result = Calculator.siumulate(snapshot, { 'price_change': +10, 'assetClassIndex': 1 }, 'price_change');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 728, 1040, 3, [new AssetClass('Aktien im DAX', 0.7, 440), new AssetClass('ausländische Aktien', 0.3, 500)]))));
  });
  it('-10 % assetClassIndex 1', function () {
    let result = Calculator.siumulate(snapshot, { 'price_change': -10, 'assetClassIndex': 1 }, 'price_change');
    expect(JSON.stringify(result)).toEqual(JSON.stringify(new SimulationOutput(new Snapshot(date, -100, 672, 960, 3, [new AssetClass('Aktien im DAX', 0.7, 360), new AssetClass('ausländische Aktien', 0.3, 500)]))));
  });
});
describe('assetClass switches', function () {
  it('nur Basic Input', function () {
    expect(snapshot.activeAssetClasses).toEqual(false)
    expect(snapshot.generatedAssetClass).toEqual(true)
    expect(snapshot.volume).toEqual(1000)
    expect(snapshot.creditLine).toEqual(700)

    expect(snapshot.volume).toEqual(1000)
    expect(snapshot.creditLine).toEqual(700)
  });
  it('nur User Input', function () {
    snapshot.activeAssetClasses = true
    snapshot.generatedAssetClass = false

    expect(snapshot.volume).toEqual(900)
    expect(snapshot.creditLine).toEqual(430)
  });
  it('auch generated beachten', function () {
    snapshot.activeAssetClasses = true
    snapshot.generatedAssetClass = true

    expect(snapshot.volume).toEqual(1000)
    expect(snapshot.creditLine).toEqual(700)
  });
});