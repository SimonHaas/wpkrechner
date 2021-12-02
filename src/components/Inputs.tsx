import "../styling/rechner.css";
import AssetClasses from "./AssetClasses";
import { FormEventHandler } from "react";

export default function Inputs(props: {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="eingabenBox">
        <h3>Eingaben</h3>
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
                onChange={(e) => props.onChange("date", e.target.value)}
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
                className="form_field"
                placeholder="Kontostand"
                onChange={(e) => props.onChange("balance", e.target.value)}
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
                onChange={(e) => props.onChange("volume", e.target.value)}
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
                onChange={(e) => props.onChange("creditLine", e.target.value)}
              />{" "}
            </div>
          </div>
          <div className="eingabeItem">
            <div className="eingabe-title">
              <label>Sollzinssatz</label>
              <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
              <input
                type="number"
                placeholder="Sollzinssatz"
                onChange={(e) => props.onChange("interestRate", e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="speichern-button" type="submit">Speichern</button>

         <details className="dropdown">
          <summary role="button">
            <a className="button">Anlageklassen</a>
          </summary>
          <ul>
            <li>
              <div><AssetClasses></AssetClasses></div>
            </li>
          </ul>
        </details> 
      </div>
    </form>
  );
}
