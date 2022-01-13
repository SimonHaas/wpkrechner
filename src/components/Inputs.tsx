import "../styling/rechner.css";
import { FormEventHandler, useEffect, useState } from "react";
import SnapshotSelect from "./SnapshotSelect";
import { Snapshot } from "wpk";
import AssetClass from "./AssetClass";
import Switch from "react-switch";
import { FaPlusCircle } from 'react-icons/fa'

export type OptionType = { label: string, value: string }

export default function Inputs(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement>;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
  snapshot: Snapshot;
}) {
  const [options, setOptions] = useState<OptionType[]>([])
  const [assetClassesActivated, setAssetClassesActivated] = useState<boolean>(false)
  const [generatedAssetClassesActivated, setGeneratedAssetClassesActivated] = useState<boolean>(false)

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

  const renderAssetClasses = () => {
    return props.snapshot.assetClasses.map(assetClass => {
      if (assetClass.titel !== 'generated') {
        return <AssetClass />;
      } else {
        return null;
      }
    })
  }

  const addAssetClass = () => {
    console.log("click to add a new assetClass")
    // props.snapshot.assetClasses.push
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
                disabled={assetClassesActivated && !generatedAssetClassesActivated}
                type="number"
                placeholder="Depotvolumen"
                value={props.snapshot.volume || ''}
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
                disabled={assetClassesActivated && !generatedAssetClassesActivated}
                type="number"
                placeholder="Beleihungswert"
                value={props.snapshot.creditLine || ''}
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
            {renderAssetClasses()}
            <FaPlusCircle onClick={() => addAssetClass()}></FaPlusCircle>
          </>
        }
      </div>
    </form>
  );
}
