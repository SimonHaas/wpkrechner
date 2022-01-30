import { useState } from "react";
import { Calculator, Snapshot } from "wpk";
import AssetClassesSelect from "../AssetClassSelect";

export default function Verkäufe(props: {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}) {
  const [volume, setVolume] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const selectAssetClass = (index: number) => {
    setIndex(index);
    updateSimulation(volume);
  }

  const updateSimulation = (newVolume: number) => {
    setVolume(newVolume)
    console.log(volume)
    let result;
    if (index === -1) {
      result = Calculator.siumulate(
        props.snapshot,
        { volume: newVolume },
        "handel"
      )
    } else {
      result = Calculator.siumulate(
        props.snapshot,
        { volume: newVolume, assetClassIndex: index },
        "handel"
      )
    }
    props.setSimulationOutput(result);
  }

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Verkauf</h3>
      </div>
      <div className="eingabeItem">
        <div className="eingabe-title">
          <label>Verkaufsvolumen</label>
          <div className="underLine"></div>
        </div>
        <div className="eingabe-form">
          <input
            type="number"
            placeholder="Verkaufsvolumen"
            min="0"
            onChange={(e) => updateSimulation(-e.target.value)}
          />
        </div>
        <AssetClassesSelect
          snapshot={props.snapshot}
          selectAssetClass={selectAssetClass}
        ></AssetClassesSelect>
      </div>
    </div>
  );
}
