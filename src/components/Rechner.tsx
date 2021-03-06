import Kennzahlen from "./Kennzahlen";
import Inputs from "./Inputs";
import { Snapshot } from "@simonhaas/wpk-rechner";
import { FormEventHandler } from "react";

export default function Rechner(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement>;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot,
}) {
  return (
    <div className="mainpage-rechner">
      <Inputs saveSnapshot={props.saveSnapshot} updateSnapshot={props.updateSnapshot} setSnapshot={props.setSnapshot} snapshot={props.snapshot} />
      <Kennzahlen snapshot={props.snapshot} />
    </div>
  );
}
