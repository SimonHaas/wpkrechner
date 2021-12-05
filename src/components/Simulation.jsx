import { Calculator, Snapshot } from "wpk"

export default function Simulation() {

    let snapshot = new Snapshot(new Date(), -800, 1000, 2000, 2,9)
    let simulationResult = Calculator.siumulate(snapshot, {'volume': 100}, 'handel')
    console.log({simulationResult})

    return (
        <div>
            <p>Simulation</p>
        </div>
    )
}
