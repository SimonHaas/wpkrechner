import NavBarSimulation from "./NavBarSimulation";
import Verkäufe from "./pages/Verkäufe";
import Zukäufe from "./pages/Zukäufe";
import Zinsen from "./pages/Zinsen";
import Sparplan from "./pages/Sparplan";
import Kursveränderung from "./pages/Kursveränderung";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SnapshotView from "./SnapshotView";
import "../styling/rechner.css";
import { SimulationOutput, Snapshot } from "wpk";
import Kennzahlen from "./Kennzahlen";
import { useState } from "react";

export default function Simulation(props: {
  snapshot: Snapshot
}) {

  const [simulationOutput, setSimulationOutput] = useState<SimulationOutput>(
    new SimulationOutput(props.snapshot)
  );

  return (
    <Router>
      <NavBarSimulation />
      <div className="rowSimulation">
        <div className="aktuellerStand">
          <SnapshotView title="Aktueller Stand" snapshot={props.snapshot}></SnapshotView>
        </div>
        <div className="aktuellerStand">
          <SnapshotView title="Simulierter Stand" snapshot={simulationOutput.snapshot}></SnapshotView>
        </div>
        <div className="simulation">
          <div className="containerLeft">
            <Switch>
              <Route path="/verkäufe" exact render={() => <Verkäufe setSimulationOutput={setSimulationOutput} snapshot={props.snapshot} />}></Route>
              <Route path="/zukäufe" exact render={() => <Zukäufe setSimulationOutput={setSimulationOutput} snapshot={props.snapshot} />}></Route>
              <Route path="/zinsen" exact render={() => <Zinsen setSimulationOutput={setSimulationOutput} snapshot={props.snapshot} />}></Route>
              <Route path="/sparplan" exact render={() => <Sparplan setSimulationOutput={setSimulationOutput} snapshot={props.snapshot} />}></Route>
              <Route path="/kursveränderung" exact render={() => <Kursveränderung setSimulationOutput={setSimulationOutput} snapshot={props.snapshot} />}></Route>
            </Switch>
          </div>
          <div className="kennzahlen">
            <div>
              <Kennzahlen snapshot={simulationOutput.snapshot} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
