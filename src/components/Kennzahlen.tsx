import { Calculator, Snapshot } from "wpk";
import Kennzahl from "./Kennzahl";

export default function Kennzahlen(props: { snapshot: Snapshot; }) {
    return (
        <div className="kennzahlenBox">
            <Kennzahl title='Beleihungsquote' value={Calculator.value(props.snapshot, 'Beleihungsquote')} />
            {/* <Kennzahl title='Verfügbarer Betrag' value={120} /> */}
        </div>
    )
}
