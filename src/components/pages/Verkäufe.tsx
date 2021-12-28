import { Calculator, Snapshot } from "wpk";

export default function Verkäufe(props: {
  setSimulationOutput: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}) {

  const updateSimulation = (volume: number) => {
    let result = Calculator.siumulate(props.snapshot, { 'volume': volume }, 'handel')
    props.setSimulationOutput(result)
  }

  return (
    <div>
      <div className="containerLeft-header">
        <h3>Verkäufe</h3>
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
            onChange={(e) => updateSimulation(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
