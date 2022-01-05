import React from "react";
import { Snapshot } from "wpk";
import Kennzahl from "./Kennzahl";
import "../styling/rechner.css";

export default function Kennzahlen(props: { snapshot: Snapshot }) {
    return (
    <div className="kennzahlenBox">
      <h3>Kennzahlen</h3>
      <div className="kennzahlen">
        <Kennzahl snapshot={props.snapshot} calculation='Beleihungsquote' />
        <Kennzahl snapshot={props.snapshot} calculation='Sollzinsen' />
        <Kennzahl snapshot={props.snapshot} calculation='hebel' />
        <Kennzahl snapshot={props.snapshot} calculation='Verfügbarer Betrag' />
        <Kennzahl snapshot={props.snapshot} calculation='Kreditbeanspruchung' />
        <Kennzahl snapshot={props.snapshot} calculation='Eigenkapital' />
        <Kennzahl snapshot={props.snapshot} calculation='Eigenkapitalquote' />
        <Kennzahl snapshot={props.snapshot} calculation='Verschuldungsgrad' />
        <Kennzahl snapshot={props.snapshot} calculation='verkraftbarer_Kursrückgang' />
        <Kennzahl snapshot={props.snapshot} calculation='maximales_Depotvolumen' />
        <Kennzahl snapshot={props.snapshot} calculation='maximales_Fremdkapital' />
        <Kennzahl snapshot={props.snapshot} calculation='maximale_Neuinvestition' />
      </div>
    </div>
  );
}
