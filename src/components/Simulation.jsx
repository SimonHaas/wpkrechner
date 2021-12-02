import NavBarSimulation from "./NavBarSimulation";
import Verkäufe from "./pages/Verkäufe";
import Zukäufe from "./pages/Zukäufe";
import Zinsen from "./pages/Zinsen";
import Sparplan from "./pages/Sparplan";
import Kursveränderung from "./pages/Kursveränderung";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    </Router>
  );
}
