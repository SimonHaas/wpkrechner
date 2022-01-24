import "../styling/rechner.css";
import { FormEventHandler, useCallback, useEffect, useState } from "react";
import SnapshotSelect from "./SnapshotSelect";
import { Snapshot, AssetClass } from "wpk";
import Switch from "react-switch";
import { FaPlusCircle } from "react-icons/fa";
import AssetClasses from "./AssetClasses";

export type OptionType = { label: string; value: string };

export default function Inputs(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement>;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
  snapshot: Snapshot;
}) {
  const [options, setOptions] = useState<OptionType[]>([]);

  const updateActiveAssetClasses = (activeAssetClasses: boolean) => {
    let newSnapshot = props.snapshot.clone();
    newSnapshot.activeAssetClasses = activeAssetClasses;
    props.setSnapshot(newSnapshot);
    console.log(newSnapshot);
  };

  const updateGeneratedAssetClass = (generatedAssetClass: boolean) => {
    let newSnapshot = props.snapshot.clone();
    newSnapshot.generatedAssetClass = generatedAssetClass;
    props.setSnapshot(newSnapshot);
  };

  useEffect(() => {
    const savedSnapshots = JSON.parse(
      localStorage.getItem("snapshots") || "[]"
    );
    // TODO das lädt nur einen Snapshot!
    savedSnapshots.forEach((snapshotObject: object) => {
      let snapshot: Snapshot = Snapshot.fromJson(
        JSON.stringify(snapshotObject)
      );
      setOptions([
        ...options,
        {
          value: JSON.stringify(snapshot),
          label:
            new Date(snapshot.date).toLocaleDateString() +
            " Kontostand: " +
            snapshot.balance,
        },
      ]);
    });
    // eslint-disable-next-line
  }, []); // only run once when the page loads

  const saveSnapshot = (e: any) => {
    e.preventDefault();
    setOptions([
      ...options,
      {
        value: JSON.stringify(props.snapshot),
        label:
          new Date(props.snapshot.date).toLocaleDateString() +
          " Kontostand: " +
          props.snapshot.balance,
      },
    ]);
    props.saveSnapshot(e);
  };

  const addAssetClass = () => {
    let newSnapshot = props.snapshot.clone();
    newSnapshot.addAssetClass(new AssetClass("", 0, 0));
    props.setSnapshot(newSnapshot);
  };

  const removeAssetClass = useCallback(
    (assetClass: AssetClass) => {
      let newSnapshot = props.snapshot.clone();
      newSnapshot.removeAssetClass(assetClass);
      props.setSnapshot(newSnapshot);
    },
    [props]
  );

  const updateAssetClass = (index: number, field: string, value: string) => {
    let newSnapshot = props.snapshot.clone();

    switch (field) {
      case "title":
        newSnapshot.assetClasses[index].title = value;
        break;
      case "loanToValue":
        newSnapshot.assetClasses[index].loanToValue = +value / 100;
        break;
      case "volume":
        newSnapshot.assetClasses[index].volume = +value;
        break;
    }

    props.setSnapshot(newSnapshot);
  };

  return (
    <form onSubmit={saveSnapshot} style={{ overflow: "auto" }}>
      <div className="eingabenBox">
        <div className="eingabenBox-header">
          <h3>Eingaben</h3>
          <SnapshotSelect
            options={options}
            setSnapshot={props.setSnapshot}
          ></SnapshotSelect>
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
                value={
                  new Date(props.snapshot.date).toISOString().split("T")[0]
                }
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
                value={props.snapshot.balance || ""}
                onChange={(e) =>
                  props.updateSnapshot("balance", e.target.value)
                }
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
                disabled={!props.snapshot.generatedAssetClass}
                type="number"
                placeholder="Depotvolumen"
                value={props.snapshot.volume || ""}
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
                disabled={!props.snapshot.generatedAssetClass}
                type="number"
                placeholder="Beleihungswert"
                value={props.snapshot.creditLine || ""}
                onChange={(e) =>
                  props.updateSnapshot("creditLine", e.target.value)
                }
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
                value={props.snapshot.interestRate || ""}
                onChange={(e) =>
                  props.updateSnapshot("interestRate", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <button className="speichern-button" type="submit">
          Speichern
        </button>
        <div className="assetclass">
          <label>
            <div className="assetclass-title">
              <h3 className="assetclass-header">Anlageklassen</h3>
              <Switch
                className="switch"
                onChange={() =>
                  updateActiveAssetClasses(!props.snapshot.activeAssetClasses)
                }
                checked={props.snapshot.activeAssetClasses}
              />
            </div>
          </label>
          {props.snapshot.activeAssetClasses && (
            <>
              <label>
                <div className="assetclassGenerated-title">
                  <div className="assetclassGenerated-header">
                    <span title='Um Abweichungen zwischen den oben eingegebenen Beleihungswert und Depotvolumen und den aggregierten Werten der Anlageklassen auszugleichen ist eine "generierte Anlageklasse" nötig.'>
                      <h4>
                        Generierte
                        <br />
                        Anlageklasse
                      </h4>
                    </span>
                  </div>
                  <Switch
                    className="switch"
                    onChange={() =>
                      updateGeneratedAssetClass(
                        !props.snapshot.generatedAssetClass
                      )
                    }
                    checked={props.snapshot.generatedAssetClass}
                  />
                </div>
              </label>
              <br />
              <div className="classes">
                {props.snapshot.generatedAssetClass && (
                  <div className="class-values">
                    <p>Wert: {props.snapshot.assetClasses[0].volume}</p>
                    <p>
                      Beleihungsquote in %:{" "}
                      {props.snapshot.assetClasses[0].loanToValue * 100}
                    </p>
                  </div>
                )}
                <AssetClasses
                  assetClasses={props.snapshot.assetClasses}
                  removeAssetClass={removeAssetClass}
                  updateAssetClass={updateAssetClass}
                ></AssetClasses>{" "}
                <FaPlusCircle
                  className="add"
                  onClick={() => addAssetClass()}
                ></FaPlusCircle>
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
