import Kennzahlen from "./Kennzahlen";
import Inputs from "./Inputs";
import { Snapshot } from "wpk";
import { FormEventHandler } from "react";

export default function Rechner(props: {
  saveSnapshot: FormEventHandler<HTMLFormElement> | undefined;
  updateSnapshot: (field: string, value: string) => void;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>,
  snapshot: Snapshot
}) {
  return (
    <div className="mainPage-rechner">
      <Inputs saveSnapshot={props.saveSnapshot} updateSnapshot={props.updateSnapshot} setSnapshot={props.setSnapshot} />
      <Kennzahlen snapshot={props.snapshot} />
    </div>
  );
}
