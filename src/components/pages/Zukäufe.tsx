import { useState } from "react";
import { Calculator, Snapshot } from "wpk";
import AssetClassesSelect from "../AssetClassSelect";

export type OptionType = { label: string; value: string };

export default function Zukäufe(props: {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>;
  snapshot: Snapshot;
}) {
  const [volume, setVolume] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const selectAssetClass = (index: number) => {
    setIndex(index);
    updateVolume(volume);
  };

  const updateVolume = (newVolume: number) => {
    setVolume(newVolume);
    let result;
    if (index === -1) {
      result = Calculator.siumulate(
        props.snapshot,
        { volume: newVolume },
        "handel"
      );
    } else {
      result = Calculator.siumulate(
        props.snapshot,
        { volume: newVolume, assetClassIndex: index },
        "handel"
      );
    }
    props.setSimulationOutput(result);
  };

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Zukauf</h3>
      </div>
      <div className="containerLeft-input">
        <div className="eingabeItem">
          <div className="eingabe-title">
            <label>Kaufvolumen</label>
            <div className="underLine"></div>
          </div>
          <div className="eingabe-form">
            <input
              type="number"
              placeholder="Kaufvolumen"
              min="0"
              onChange={(e) => updateVolume(+e.target.value)}
            />
          </div>
        </div>
        <AssetClassesSelect
          snapshot={props.snapshot}
          selectAssetClass={selectAssetClass}
        ></AssetClassesSelect>
      </div>
    </div>
  );
}
