import Kennzahl from "./Kennzahl";

export default function Kennzahlen() {
    return (
        <div className="kennzahlenBox">
            <Kennzahl title='Sollzinsen p.a.' value={50} />
            <Kennzahl title='Verfügbarer Betrag' value={120} />
            <Kennzahl title='Beleihungsquote' value={0,78} />
        </div>
    )
}
