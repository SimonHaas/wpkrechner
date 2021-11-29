import React from "react";
import { Calculator, Snapshot } from "wpk";
import Kennzahl from "./Kennzahl";
import "../styling/rechner.css";

export default function Kennzahlen(props: { snapshot: Snapshot }) {
  let metrics = [];

  for (let key in Calculator.calculations) {
    let calculation =
      Calculator.calculations[key as keyof typeof Calculator.calculations];
    metrics.push(
      <Kennzahl
        title={calculation._title}
        value={Calculator.value(props.snapshot, calculation._title)}
      />
    );
  }

  return (
    <div className="kennzahlenBox">
      <h3>Überblick Kennzahlen</h3>
      <div className="kennzahlen">
        {metrics.map((component, index) => (
          <React.Fragment key={index}>{component}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
