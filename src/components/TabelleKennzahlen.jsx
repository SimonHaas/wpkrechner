export default function TabelleKennzahlen() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Kennzahl</th>
                        <th>Beschreibung</th>
                        <th>Berechnung</th>
                    </tr>

                    <tr>
                        <td>Sollzinsen p. a.</td>
                        <td>In einem Jahr fällige Zinszahlungen.</td>
                        <td>=Kontostand*Sollzinssatz</td>
                    </tr>

                    <tr>
                        <td>Verfügbarer Betrag</td>
                        <td>Um wie viel der Kredit noch genutzt werden kann.</td>
                        <td>=Beleihungswert*Kontostand</td>
                    </tr>

                    <tr>
                        <td>Beleihungsquote</td>
                        <td>Verschiedene Anlageklassen können zu unterschiedlichen Prozentsätzen beliehen werden.
                            Mit der Beleihungsquote ergibt sich ein individueller Prozentsatz abhängig von der Depotzusammenstellung.</td>
                        <td>=Beleihungswert/Depotvolumen</td>
                    </tr>

                    <tr>
                        <td>Beleihungswertausnutzung</td>
                        <td>Ist das Verhältnis des in Anspruch genommenen Kredits zum Beleihungswert.</td>
                        <td>=(Kontostand/Beleihungswert)*(-1)</td>
                    </tr>

                    <tr>
                        <td>Eigenkapital</td>
                        <td>Ist das aus eigenen Mitteln aufgebrachte Kapital zur Finanzierung einer Sache.</td>
                        <td>=Depotvolumen+Kontostand</td>
                    </tr>

                    <tr>
                        <td>Eigenkapitalquote</td>
                        <td>Verhältnis von Eigenkapital zum gesamten Depotvolumen.</td>
                        <td>=(Depotvolumen+Kontostand)/Depotvolumen</td>
                    </tr>

                    <tr>
                        <td>Verschuldungsgrad</td>
                        <td>Ein Verschuldungsgrad von bspw. 50% bedeutet, dass für 100€ Eigenkapital 50€ des Kredits beansprucht ist.</td>
                        <td>=Kontostand/(Depotvolumen+Kontostand)</td>
                    </tr>

                    <tr>
                        <td>verkraftbarer Kursrückgang</td>
                        <td>Wie weit kann das Depotvolumen sinken ohne, dass der in Anspruch genommene Kredit
                            den Beleihungswert übersteigt?</td>
                        <td>=Depotvolumen-(Kontostand/Beleihungsquote*-1)</td>
                    </tr>

                    <tr>
                        <td>Maximales Depotvolumen</td>
                        <td>Theoretisch maximales Depotvolumen wenn der Kredit immer wieder reinvestiert wird
                            und Beleihungswert gleich den Schulden ist.</td>
                        <td>=1/(1-Beleihungsquote)*Depotvolumen</td>
                    </tr>

                    <tr>
                        <td>Maximales Fremdkapital</td>
                        <td>Entspricht dem theoretisch maximalen Fremdkapital unter der Einhaltung der Regeln des Kreditvertrages.</td>
                        <td>=Maximales Depotvolumen-Eigenkapital</td>
                    </tr>

                    <tr>
                        <td>Maximale Neuinvestition</td>
                        <td>Maximale Neuinvestition in Wertpapiere unter Einhaltung der Regeln des Kreditvertrages.</td>
                        <td>=Maximales Fremdkapital+Kontostand</td>
                    </tr>

                    <tr>
                        <td>Hebel</td>
                        <td>Wie stark ist das Eigenkapital gehebelt?</td>
                        <td>=Depotvolumen/Eigenkapital</td>
                    </tr>

                    {/* <tr>
                <td>Margin</td>
                <td>Dabei handelt es sich um einen Sicherheitspuffer.</td>
                <td>Margin=100-(Kontostand/Eigenkapital)</td>
            </tr> */}
                </tbody>
            </table>
        </div>
    )
}