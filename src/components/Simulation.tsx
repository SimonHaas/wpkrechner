import NavBarSimulation from "./NavBarSimulation";
import Verkäufe from "./pages/Verkäufe";
import Zukäufe from "./pages/Zukäufe";
import Zinsen from "./pages/Zinsen";
import Sparplan from "./pages/Sparplan";
import Kursveränderung from "./pages/Kursveränderung";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UeberblickEingaben from "./UeberblickEingaben";
import "../styling/rechner.css";
import { Snapshot } from "wpk";
import Kennzahlen from "./Kennzahlen";
import { useState } from "react";

export default function Simulation(props: {
  snapshot: Snapshot
}) {

  const [snapshot, setSnapshot] = useState<Snapshot>(
    new Snapshot(new Date(), 0, 0, 0, 0)
  );

  return (
    <Router>
      <NavBarSimulation />
      <div className="rowSimulation">
        <div className="aktuellerStand">
          <UeberblickEingaben snapshot={props.snapshot}></UeberblickEingaben>
        </div>
        <div className="simulation">
          <div className="containerLeft">
            <Switch>
              <Route path="/verkäufe" exact render={() => <Verkäufe setSnapshot={setSnapshot} snapshot={snapshot} />}></Route>
              <Route path="/zukäufe" exact component={Zukäufe}></Route>
              <Route path="/zinsen" exact component={Zinsen}></Route>
              <Route path="/sparplan" exact component={Sparplan}></Route>
              <Route path="/kursveränderung" exact component={Kursveränderung}></Route>
            </Switch>
          </div>
          <div className="kennzahlen">
            <div>{<Kennzahlen snapshot={snapshot} />}</div>
          </div>
        </div>
      </div>
    </Router>
  );
}
