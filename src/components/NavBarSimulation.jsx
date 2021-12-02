import NavBarSimulationItem from "./NavBarSimulationItem";
import "../styling/simulation.css";

export default function NavBarSimulation() {
  return (
    <div className="navigationBar">
      <ul>
        <li>
          <NavBarSimulationItem title="Verkäufe" to="/verkäufe" />
        </li>
        <li>
          <NavBarSimulationItem title="Zukäufe" to="/zukäufe" />
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
