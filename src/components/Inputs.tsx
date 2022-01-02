import "../styling/rechner.css";
// import AssetClasses from "./AssetClasses";
import { FormEventHandler } from "react";
import SnapshotSelect from "./SnapshotSelect";

export default function Inputs(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement> | undefined;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <form onSubmit={props.saveSnapshot}>
      <div className="eingabenBox">
        <div className="eingabenBox-header">
          <h3>Eingaben</h3>
          <SnapshotSelect setSnapshot={props.setSnapshot}></SnapshotSelect>
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
