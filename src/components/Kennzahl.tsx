import { Calculator, Snapshot } from "wpk";

export default function Kennzahl(props: { snapshot: Snapshot, calculation: string, displayAsPercent: boolean }) {
    return (
        <div className="kennzahl" title={Calculator.calculations[props.calculation]._description}>
            <h4>{Calculator.calculations[props.calculation]._title}</h4>
            {!props.displayAsPercent && <p>{Calculator.value(props.snapshot, props.calculation).toFixed(2).toString()}</p>}
            {props.displayAsPercent && <p>{(Calculator.value(props.snapshot, props.calculation) * 100).toFixed(2).toString()} %</p>}
        </div>
    )
}
