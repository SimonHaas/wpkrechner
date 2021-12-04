import NavBarSimulation from "./NavBarSimulation";
import Verkäufe from "./pages/Verkäufe";
import Zukäufe from "./pages/Zukäufe";
import Zinsen from "./pages/Zinsen";
import Sparplan from "./pages/Sparplan";
import Kursveränderung from "./pages/Kursveränderung";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UeberblickEingaben from "./UeberblickEingaben";
import "../styling/rechner.css";
import Kennzahlen from "./Kennzahlen";

export default function Simulation() {
  return (
    <Router>
      <NavBarSimulation />
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
      <div className="column">
        <div className="eingaben-ueberblick">
          <UeberblickEingaben></UeberblickEingaben>
        </div>
        <div className="simulation">
          <div className="regler">
            <div className="regler-header">
              <h3>Title</h3>
            </div>
          </div>
          <div className="kennzahlen">
            <h3>Kennzahlen</h3>
          </div>
        </div>
      </div>
    </Router>
  );
}
