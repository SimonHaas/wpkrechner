import { Snapshot } from "wpk";
import "../styling/simulation.css";
import UeberblickEingabenElement from "./UeberblickEingabenElement";

export default function UeberblickEingaben(props: {
  snapshot: Snapshot
}) {
  return (
    <div className="eingaben-ueberblick">
      <div className="cardBox-header">
        <h3>Aktueller Stand</h3>
      </div>
      <div className="cardsSimulation">
        <UeberblickEingabenElement title={"Kontostand"} value={props.snapshot.balance} ></UeberblickEingabenElement>
        <UeberblickEingabenElement title={"Depotvolumen"} value={props.snapshot.volume} ></UeberblickEingabenElement>
        <UeberblickEingabenElement title={"Beleihungswert"} value={props.snapshot.creditLine} ></UeberblickEingabenElement>
        <UeberblickEingabenElement title={"Sollzinssatz"} value={props.snapshot.interestRate} ></UeberblickEingabenElement>
      </div>
    </div>
  );
}
