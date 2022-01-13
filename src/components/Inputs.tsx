import "../styling/rechner.css";
// import AssetClasses from "./AssetClasses";
import { FormEventHandler, useEffect, useState } from "react";
import SnapshotSelect from "./SnapshotSelect";
import { Snapshot } from "wpk";

export type OptionType = { label: string, value: string }

export default function Inputs(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement>;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
  snapshot: Snapshot;
}) {
  const [options, setOptions] = useState<OptionType[]>([])

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

  return (
    <form onSubmit={saveSnapshot}>
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

        {/* <details className="dropdown">
          <summary role="button">
            <p className="button">Anlageklassen</p>
          </summary>
          <ul>
            <li>
              <div>
                <AssetClasses></AssetClasses>
              </div>
            </li>
          </ul>
        </details> */}
      </div>
    </form>
  );
}
