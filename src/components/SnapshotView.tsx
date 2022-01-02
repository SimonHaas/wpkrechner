import { Snapshot } from "wpk";
import "../styling/simulation.css";
import SnapshotViewElement from "./SnapshotViewElement";

export default function SnapshotView(props: {
  title: string,
  snapshot: Snapshot
}) {
  return (
    <div className="eingaben-ueberblick">
      <div className="cardBox-header">
        <h3>{props.title}</h3>
      </div>
      <div className="cardsSimulation">
        <SnapshotViewElement title={"Kontostand"} value={props.snapshot.balance} ></SnapshotViewElement>
        <SnapshotViewElement title={"Depotvolumen"} value={props.snapshot.volume} ></SnapshotViewElement>
        <SnapshotViewElement title={"Beleihungswert"} value={props.snapshot.creditLine} ></SnapshotViewElement>
        <SnapshotViewElement title={"Sollzinssatz"} value={props.snapshot.interestRate} ></SnapshotViewElement>
      </div>
    </div>
  );
}
