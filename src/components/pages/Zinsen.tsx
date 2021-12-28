import { useState } from "react";
import { Calculator, Snapshot } from "wpk";

interface Prop {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}

export default function Zinsen({setSimulationOutput, snapshot}: Prop) {

  const [years, setYears] = useState<number>(0)
  const [balanceChange, setBalanceChange] = useState<number>(0)

  const updateYear = (yearsInput: number) => {
    setYears(yearsInput)
    let result = Calculator.siumulate(snapshot, { 'years': years, 'balanceChange': balanceChange }, 'interest')
    setSimulationOutput(result)
  }

  const updateBalanceChange = (balanceChangeInput: number) => {
    setBalanceChange(balanceChangeInput)
    let result = Calculator.siumulate(snapshot, { 'years': years, 'balanceChange': balanceChange }, 'interest')
    setSimulationOutput(result)
  }

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
            onChange={(e) => updateYear(+e.target.value)}
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
            onChange={(e) => updateBalanceChange(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
