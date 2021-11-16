import React from "react";
import { Calculator, Snapshot } from "wpk";
import Kennzahl from "./Kennzahl";

export default function Kennzahlen(props: { snapshot: Snapshot; }) {
    let metrics = []

    for (let key in Calculator.calculations) {
        let calculation = Calculator.calculations[key as keyof typeof Calculator.calculations]
        metrics.push(<Kennzahl title={calculation._title} value={Calculator.value(props.snapshot, calculation._title)} />)
    }

    return (
        <div className="kennzahlenBox">
            {metrics.map((component, index) => (
                <React.Fragment key={index}>
                    {component}
                </React.Fragment>
            ))}
        </div>
    )
}
