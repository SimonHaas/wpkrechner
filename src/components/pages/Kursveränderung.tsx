import { useEffect, useState } from "react";
import { Calculator, Snapshot } from "wpk";
import AssetClassesSelect from "../AssetClassSelect";

interface Prop {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>;
  snapshot: Snapshot;
}
//TODO Warum beim simulierten Stand 'NaN' angezeigt, aber bei anderen Simulationen nicht?
export default function Kursveränderung({
  setSimulationOutput,
  snapshot,
}: Prop) {
  const [priceChange, setPriceChange] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let result;
    if (index === -1) {
      result = Calculator.siumulate(
        snapshot,
        { price_change: priceChange },
        "price_change"
      );
    } else {
      result = Calculator.siumulate(
        snapshot,
        { price_change: priceChange, assetClassIndex: index },
        "price_change"
      );
    }
    setSimulationOutput(result);
  }, [priceChange, setSimulationOutput, snapshot, index]);

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Kursveränderung</h3>
      </div>
      <div className="containerLeft-input">
        <div className="eingabeItem">
          <div className="eingabe-title">
            <label>Kursveränderung in %</label>
            <div className="underLine"></div>
          </div>
          <div className="eingabe-form">
            <input
              type="number"
              placeholder="Kursveränderung in Prozent"
              min="0"
              onChange={(e) => setPriceChange(+e.target.value)}
            />
          </div>
        </div>
        <AssetClassesSelect
          snapshot={snapshot}
          selectAssetClass={setIndex}
        ></AssetClassesSelect>
      </div>
    </div>
  );
}
