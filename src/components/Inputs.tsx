import "../styling/rechner.css";
import { FormEventHandler, Fragment, useCallback, useEffect, useState } from "react";
import SnapshotSelect from "./SnapshotSelect";
import { Snapshot, AssetClass, Calculator } from "wpk";
import Switch from "react-switch";
import { FaPlusCircle } from 'react-icons/fa'
import AssetClasses from "./AssetClasses";

export type OptionType = { label: string, value: string }

export default function Inputs(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement>;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
  snapshot: Snapshot;
}) {
  const [options, setOptions] = useState<OptionType[]>([])
  const [assetClassesActivated, setAssetClassesActivated] = useState<boolean>(false)
  const [generatedAssetClassesActivated, setGeneratedAssetClassesActivated] = useState<boolean>(true)

  // für Komponente AssetClasses die Anlageklassen als state, damit das DOM entsprechend aktualisiert wird
  const [assetClasses, setAssetClasses] = useState<AssetClass[]>(props.snapshot.assetClasses)

  const [onlyInputViaAssetClasses, setOnlyInputViaAssetClasses] = useState<boolean>(false)
  const [beleihungswert, setBeleihungswert] = useState<number>(0)
  const [depotvolumen, setDepotvolumen] = useState<number>(0)

  useEffect(() => {
    if (onlyInputViaAssetClasses) {
      setBeleihungswert(Calculator.value(props.snapshot, 'creditLine_userInput'))
      setDepotvolumen(Calculator.value(props.snapshot, 'volume_userInput'))
    } else {
      setBeleihungswert(Calculator.value(props.snapshot, 'creditLine'))
      setDepotvolumen(Calculator.value(props.snapshot, 'volume'))
    }
  }, [props.snapshot, onlyInputViaAssetClasses])

  useEffect(() => {
    setOnlyInputViaAssetClasses(assetClassesActivated && !generatedAssetClassesActivated)
  }, [assetClassesActivated, generatedAssetClassesActivated])

  useEffect(() => {
    const savedSnapshots = JSON.parse(localStorage.getItem('snapshots') || '[]')
    savedSnapshots.forEach((snapshotObject: object) => {
      let snapshot: Snapshot = Snapshot.fromJson(JSON.stringify(snapshotObject))
      setOptions([...options, { value: JSON.stringify(snapshot), label: new Date(snapshot.date).toLocaleDateString() + ' Kontostand: ' + snapshot.balance }])
    });
    // eslint-disable-next-line
  }, []) // only run once when the page loads

  const saveSnapshot = (e: any) => {
    e.preventDefault();
    setOptions([...options, { value: JSON.stringify(props.snapshot), label: new Date(props.snapshot.date).toLocaleDateString() + ' Kontostand: ' + props.snapshot.balance }])
    props.saveSnapshot(e)
  };

  const addAssetClass = () => {
    props.snapshot.addAssetClass(new AssetClass('', 0, 0))
    setAssetClasses(props.snapshot.assetClasses)
  }

  const removeAssetClass = useCallback((assetClass: AssetClass) => {
    props.snapshot.removeAssetClass(assetClass)
    setAssetClasses(props.snapshot.assetClasses)
  }, [props.snapshot])

  const [testAssetClasses, setTestAssetClasses] = useState<AssetClass[]>([new AssetClass('test', 100, 999), new AssetClass('test2', 100, 999)])

  const updateAssetClass = (index: number, field: string, value: string) => {
    console.log("in der updateAssetClass Funktion")

    // TODO und jetzt auch den state im snapshot aktualisieren

    const newAssetClasses: AssetClass[] = []
    for (let i = 0; i < testAssetClasses.length; i++) {
      newAssetClasses.push(AssetClass.fromJson(JSON.stringify(testAssetClasses[i])))
    }

    switch (field) {
      case 'title':
        newAssetClasses[index].title = value
        break
      case 'loanToValue':
        newAssetClasses[index].loanToValue = +value
        break
      case 'volume':
        newAssetClasses[index].volume = +value
        break
    }

    setTestAssetClasses(newAssetClasses)
  }

  return (
    <form onSubmit={saveSnapshot} style={{ overflow: 'auto' }}>
      <div className="eingabenBox">
        <div className="eingabenBox-header">
          <h3>Eingaben</h3>
          <SnapshotSelect options={options} setSnapshot={props.setSnapshot}></SnapshotSelect>
        </div>
        <div className="essentialInputs">
          <div className="eingabeItem">
            <div className="eingabe-title">
              <label>Datum</label>
              <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
              <input
                type="date"
                className="date"
                value={new Date(props.snapshot.date).toISOString().split('T')[0]}
                onChange={(e) => props.updateSnapshot("date", e.target.value)}
              />
            </div>
          </div>
          <div className="eingabeItem">
            <div className="eingabe-title">
              <label>Kontostand</label>
              <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
              <input
                type="number"
                placeholder="Kontostand"
                value={props.snapshot.balance || ''}
                onChange={(e) => props.updateSnapshot("balance", e.target.value)}
              />
            </div>
          </div>
          <div className="eingabeItem">
            <div className="eingabe-title">
              <label>Depotvolumen</label>
              <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
              <input
                disabled={onlyInputViaAssetClasses}
                type="number"
                placeholder="Depotvolumen"
                value={depotvolumen || ''}
                onChange={(e) => props.updateSnapshot("volume", e.target.value)}
              />
            </div>
          </div>
          <div className="eingabeItem">
            <div className="eingabe-title">
              <label>Beleihungswert</label>
              <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
              <input
                disabled={onlyInputViaAssetClasses}
                type="number"
                placeholder="Beleihungswert"
                value={beleihungswert || ''}
                onChange={(e) => props.updateSnapshot("creditLine", e.target.value)}
              />{" "}
            </div>
          </div>
          <div className="eingabeItem">
            <div className="eingabe-title">
              <label>Sollzinssatz in %</label>
              <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
              <input
                type="number"
                placeholder="Sollzinssatz"
                value={props.snapshot.interestRate || ''}
                onChange={(e) => props.updateSnapshot("interestRate", e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="speichern-button" type="submit">
          Speichern
        </button>

        <label>
          <span>Anlageklassen</span>
          <Switch onChange={() => setAssetClassesActivated(!assetClassesActivated)} checked={assetClassesActivated} />
        </label>
        {assetClassesActivated &&
          <>
            <label>
              <span title='Um Abweichungen zwischen den oben eingegebenen Beleihungswert und Depotvolumen und den aggregierten Werten der Anlageklassen auszugleichen ist eine "generierte Anlageklasse" nötig.'>Generierte Anlageklasse</span>
              <Switch onChange={() => setGeneratedAssetClassesActivated(!generatedAssetClassesActivated)} checked={generatedAssetClassesActivated} />
            </label>
            {generatedAssetClassesActivated &&
              <>
                <p>Wert: {props.snapshot.assetClasses[0].volume}</p>
                <p>Beleihungsquote: {props.snapshot.assetClasses[0].loanToValue}</p>
              </>}
            <AssetClasses assetClasses={testAssetClasses} removeAssetClass={removeAssetClass} updateAssetClass={updateAssetClass} ></AssetClasses>
            <FaPlusCircle onClick={() => addAssetClass()}></FaPlusCircle>
          </>
        }
      </div>
    </form>
  );
}
