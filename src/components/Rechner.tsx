import Kennzahlen from "./Kennzahlen";
import Inputs from "./Inputs";
import { Snapshot } from "wpk";
import { FormEventHandler } from "react";

export default function Rechner(props: {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  onChange: (field: string, value: string) => void;
  snapshot: Snapshot
}) {
  return (
    <div className="mainPage-rechner">
      <Inputs onSubmit={props.onSubmit} onChange={props.onChange} />
      <Kennzahlen snapshot={props.snapshot} />
    </div>
  );
}
