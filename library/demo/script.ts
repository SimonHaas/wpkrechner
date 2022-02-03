import { AssetClass, Calculator, Snapshot } from "@simonhaas/wpk-rechner";

// neue Anlageklassen mit Bezeichnung, Beleihungsquote, Anlagevolumen
const assetClass1 = new AssetClass('DAX Aktien', 0.7, 400);
const assetClass2 = new AssetClass('andere Aktien', 0.3, 500);

// neuer Snapshot mit Datum, Kontostand, Beleihungswert, Anlagevolumen und Anlageklassen
const snapshot = new Snapshot(new Date(), -100, 700, 1000, 3, [assetClass1, assetClass2]);
snapshot.activeAssetClasses = true

// akutell verfügbarer Betrag (600 €)
const assetClassesBefore = snapshot.assetClasses

console.log('# Ausgangssituation:')
console.log(snapshot)
console.log()

{
    // console.log({ assetClassesBefore })
    // console.log()
}

{
    // let beleihungswert = 0
    // // = 0,7*400 + 0,3*500 + 2,7*100
    // assetClassesBefore.forEach(assetClass => {
    //     beleihungswert += assetClass.loanToValue * assetClass.volume
    // });
    // console.log({ beleihungswert })
    // console.log()
}

{
    // const availableFundsBefore = Calculator.value(snapshot, 'Verfügbarer Betrag');
    // console.log('verfügbarer Betrag: ' + availableFundsBefore);
    // console.log()
}

{
    // // Verkauf im Volumen von 100 €, anteilig nach Anlagevolumen auf Anlageklassen aufgeteilt
    // const simulationOutput = Calculator.siumulate(snapshot, { 'volume': -100 }, 'handel');

    // // zukünfig verfügbarer Betrag (630 €)
    // const availableFundsAfter = Calculator.value(simulationOutput.snapshot, 'Verfügbarer Betrag');
    // const assetClassesAfter = simulationOutput.snapshot.assetClasses

    // console.log('# Nach dem Verkauf:')
    // console.log(simulationOutput.snapshot)
    // console.log()
    // console.log({assetClassesAfter})
    // console.log()
    // console.log('verfügbarer Betrag: ' + availableFundsAfter);
}

{
    // // Verkauf im Volumen von 100 €, der Anlageklasse 'DAX Aktien'
    // const simulationOutput = Calculator.siumulate(snapshot, { 'volume': -100, 'assetClassIndex': 1 }, 'handel');
}