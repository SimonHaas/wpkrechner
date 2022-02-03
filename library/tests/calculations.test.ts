import { Calculator, Snapshot } from "@simonhaas/wpk-rechner";

const snapshot = new Snapshot(new Date(), -100, 700, 1000, 3);

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
});