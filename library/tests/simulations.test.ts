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

  
});