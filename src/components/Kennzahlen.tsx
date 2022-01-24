import React from "react";
import { Snapshot } from "wpk";
import Kennzahl from "./Kennzahl";
import "../styling/rechner.css";

export default function Kennzahlen(props: { snapshot: Snapshot }) {
    return (
    <div className="kennzahlenBox">
      <h3>Kennzahlen</h3>
      <div className="kennzahlen">
        <Kennzahl snapshot={props.snapshot} calculation='Beleihungsquote' displayAsPercent={true} />
        <Kennzahl snapshot={props.snapshot} calculation='Sollzinsen' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='hebel' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='Verfügbarer Betrag' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='Kreditbeanspruchung' displayAsPercent={true} />
        <Kennzahl snapshot={props.snapshot} calculation='Eigenkapital' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='Eigenkapitalquote' displayAsPercent={true} />
        <Kennzahl snapshot={props.snapshot} calculation='Verschuldungsgrad' displayAsPercent={true} />
        <Kennzahl snapshot={props.snapshot} calculation='verkraftbarer_Kursrückgang' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='maximales_Depotvolumen' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='maximales_Fremdkapital' displayAsPercent={false} />
        <Kennzahl snapshot={props.snapshot} calculation='maximale_Neuinvestition' displayAsPercent={false} />
      </div>
    </div>
  );
}
