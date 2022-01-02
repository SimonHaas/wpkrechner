import { Calculator, Snapshot } from "wpk";

export default function Zukäufe(props: {
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
        <h3>Zukauf</h3>
      </div>
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
            onChange={(e) => updateSimulation(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
