import { useEffect, useState } from "react";
import { Calculator, Snapshot } from "wpk";

interface Prop {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}

export default function Kursveränderung({setSimulationOutput, snapshot}: Prop) {

  const [priceChange, setPriceChange] = useState<number>(0)

  useEffect(() => {
    let result = Calculator.siumulate(snapshot, { 'price_change': priceChange }, 'price_change')
    setSimulationOutput(result)
  }, [priceChange, setSimulationOutput, snapshot])

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Kursveränderung</h3>
      </div>
      <div className="eingabeItem">
        <div className="eingabe-title">
          <label>Kursveränderung in Prozent</label>
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
    </div>
  );
}
