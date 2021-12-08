import NavBarSimulation from "./NavBarSimulation";
import Verkäufe from "./pages/Verkäufe";
import Zukäufe from "./pages/Zukäufe";
import Zinsen from "./pages/Zinsen";
import Sparplan from "./pages/Sparplan";
import Kursveränderung from "./pages/Kursveränderung";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UeberblickEingaben from "./UeberblickEingaben";
import "../styling/rechner.css";
import { Calculator, Snapshot } from "wpk";

export default function Simulation() {

  let snapshot = new Snapshot(new Date(), -800, 1000, 2000, 2,9)
    let simulationResult = Calculator.siumulate(snapshot, {'volume': 100}, 'handel')
    console.log({simulationResult})

  return (
    <Router>
      <NavBarSimulation />
      <div className="rowSimulation">
        <div className="aktuellerStand">
          <UeberblickEingaben></UeberblickEingaben>
        </div>
        <div className="simulation">
          <div className="containerLeft">
            <Switch>
              <Route path="/verkäufe" exact component={Verkäufe}></Route>
              <Route path="/zukäufe" exact component={Zukäufe}></Route>
              <Route path="/zinsen" exact component={Zinsen}></Route>
              <Route path="/sparplan" exact component={Sparplan}></Route>
              <Route
                path="/kursveränderung"
                exact
                component={Kursveränderung}
              ></Route>
            </Switch>
          </div>
          <div className="kennzahlen">
            <h3>Kennzahlen</h3>
            <div>{/*<Kennzahlen></Kennzahlen>*/}</div>
          </div>
        </div>
      </div>
    </Router>
  );
}
