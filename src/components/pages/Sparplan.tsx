import { useEffect, useState } from "react";
import { Calculator, Snapshot } from "wpk";

interface Prop {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}

export default function Sparplan({setSimulationOutput, snapshot}: Prop) {

  const [years, setYears] = useState<number>(0)
  const [rate, setRate] = useState<number>(0)
  const [equity, setEquity] = useState<number>(0)

  useEffect(() => {
    let result = Calculator.siumulate(snapshot, { 'years': years, 'rate': rate, 'equity': equity }, 'sparplan')
    setSimulationOutput(result)
  }, [years, rate, equity, setSimulationOutput, snapshot])

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Sparplan</h3>
      </div>
      <div className="eingabeItem">
        <div className="eingabe-title">
          <label>Laufzeit in Jahren</label>
          <div className="underLine"></div>
        </div>
        <div className="eingabe-form">
          <input
            type="number"
            placeholder="Laufzeit in Jahren"
            min="0"
            onChange={(e) => setYears(+e.target.value)}
          />
        </div>
      </div>
      <div className="eingabeItem">
        <div className="eingabe-title">
          <label>Sparrate</label>
          <div className="underLine"></div>
        </div>
        <div className="eingabe-form">
          <input
            type="number"
            placeholder="Sparrate"
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>
      </div>
      <div className="eingabeItem">
        <div className="eingabe-title">
          <label>Eigenkapital</label>
          <div className="underLine"></div>
        </div>
        <div className="eingabe-form">
          <input
            type="number"
            placeholder="Eigenkapital"
            onChange={(e) => setEquity(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
