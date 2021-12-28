import NavBarSimulationItem from "./NavBarSimulationItem";
import "../styling/simulation.css";

export default function NavBarSimulation() {
  return (
    <div className="navigationBar">
      <ul>
        <li>
          <NavBarSimulationItem title="Verkauf" to="/verkäufe" />
        </li>
        <li>
          <NavBarSimulationItem title="Zukauf" to="/zukäufe" />
        </li>
        <li>
          <NavBarSimulationItem title="Zinsen" to="/zinsen" />
        </li>
        <li>
          <NavBarSimulationItem title="Sparplan" to="/sparplan" />
        </li>
        <li>
          <NavBarSimulationItem title="Kursveränderung" to="/kursveränderung" />
        </li>
      </ul>
    </div>
  );
}
