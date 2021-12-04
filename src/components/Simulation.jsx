import NavBarSimulation from "./NavBarSimulation";
import Verkäufe from "./pages/Verkäufe";
import Zukäufe from "./pages/Zukäufe";
import Zinsen from "./pages/Zinsen";
import Sparplan from "./pages/Sparplan";
import Kursveränderung from "./pages/Kursveränderung";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UeberblickEingaben from "./UeberblickEingaben";
import "../styling/rechner.css";

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
      <div className="rowSimulation">
        <div className="aktuellerStand">
          <UeberblickEingaben></UeberblickEingaben>
        </div>
        <div className="simulation">
          <div className="containerLeft">
            <div className="containerLeft-header">
              <h3>Title</h3>
            </div>
            <div className="row">
              <div className="column-regler">
                <div className="containerItem">
                  <div className="containerItem-title">
                    <h3>Beleihungswert</h3>
                  </div>
                  <input type="number"></input>
                </div>
                {/*<input
                  id="slider"
                  className="range-slider"
                  type="range"
                  min="1"
                  max="100"
                  step="0.5"
                  value="1"
                ></input>*/}
              </div>
              <div className="column-regler">
                <div className="containerItem">
                  <div className="containerItem-title">
                    <h3>Test</h3>
                  </div>
                  <input type="number"></input>
                </div>
                {/*<input
                  type="range"
                  min="1"
                  max="100"
                  step="0.5"
                  value="0"
                ></input>*/}
              </div>
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

/* Für einbauen der Slider 
var slider = document.getElementById("slider");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}*/
