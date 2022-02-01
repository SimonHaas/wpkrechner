# Wertpapierkreditrechner

``` typescript
// neue Anlageklassen mit Bezeichnung, Beleihungsquote, Anlagevolumen
const assetClass1 = new AssetClass('Aktien im DAX', 0.7, 400);
const assetClass2 = new AssetClass('ausländische Aktien', 0.3, 500);

// neuer Snapshot mit Datum, Kontostand, Beleihungswert, Anlagevolumen und Anlageklassen
const snapshot = new Snapshot(new Date(), -100, 700, 1000, 3, [assetClass1, assetClass2]); 

// akutell verfügbarer Betrag (600 €)
const availableFundsBefore = Calculator.value(snapshot, 'Verfügbarer Betrag');

// Verkauf im Volumen von 100 €, anteilig nach Anlagevolumen auf Anlageklassen aufgeteilt
const simulationOutput = Calculator.siumulate(snapshot, { 'volume': -100 }, 'handel');

// zukünfig verfügbarer Betrag (630 €)
const availableFundsAfter = Calculator.value(simulationOutput.snapshot, 'Verfügbarer Betrag');

 // Verkauf im Volumen von 100 €, der Anlageklasse 'Aktien im DAX'
const simulationOutput = Calculator.siumulate(snapshot, { 'volume': -100, 'assetClassIndex': 1 }, 'handel');
```