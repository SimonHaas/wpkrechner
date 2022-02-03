import { useEffect, useState } from "react";
import { Calculator, Snapshot } from "@simonhaas/wpk-rechner";

interface Prop {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}

export default function Zinsen({setSimulationOutput, snapshot}: Prop) {

  const [years, setYears] = useState<number>(0)
  const [balanceChange, setBalanceChange] = useState<number>(0)

  useEffect(() => {
    let result = Calculator.siumulate(snapshot, { 'years': years, 'balanceChange': balanceChange }, 'interest')
    setSimulationOutput(result)
  }, [years, balanceChange, setSimulationOutput, snapshot])

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Zinsen</h3>
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
          <label>Ein-/Auszahlungen</label>
          <div className="underLine"></div>
        </div>
        <div className="eingabe-form">
          <input
            type="number"
            placeholder="Ein-/Auszahlungen"
            onChange={(e) => setBalanceChange(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
