# Konzept

## Mehrwert

- Aufklärung
    - Was ist ein Wertpapierkredit? Wie funktioniert er? Was sind die Vor- und Nachteile?
- Risikomanagment
    - Welche Auswirkungen hat ein Wertpapierkredit? Die Berechnungen helfen den Kredit und dessen Auswirkungen besser zu verstehen. Zusammenhänge und Risiken können erkannt werden.
- Liquiditätsmanagement
    - Der Kredit kann auch als Liquiditätsreserve genutzt werden. Die Simulationen zeigen unter welchen Umständen wie viel Liquidät bereitsteht.

## Berechnungen

### Eingaben

- Datum
- Depotvolumen
- Beleihungswert
- Kontostand
- Sollzinssatz

Optional kann man die Zusammensetzung des Depotvolumens durch die darin enthaltenen Anlageklassen genauer beschreiben. Relevant sind hierbei die Anlageklassen die von der Bank genutzt werden um den Beleihungswert zu ermitteln. Diese Klassen zeichnen sich durch unterschiedliche Beleihungsquoten aus.

Eine Liste an Anlageklassen mit:
- Bezeichnung
- Anlagevolumen
- Beleihungsquote

Das Datum dient als Primärschlüssel um einen Datensatz zu identifizieren. Auch die angelegten Anlageklassen hängen vom Datum ab. Sprich, für jeden Datensatz (Datum) können individuelle Anlageklassen hinterlegt werden. 

Zur clientseitigen Speicherung wird der [Local Storage](https://developer.mozilla.org/de/docs/Web/API/Window/localStorage) verwendet.

``` javascript
# Datum = date
# Depotvolumen = volume
# Beleihungswert = creditLine
# Kontostand = balance
# Sollzinssatz = interestRate
# Anlageklasse = assetClass
# Bezeichnung = subDescription
# Anlagevolumen = subVolume
# Beleihungsquote = subLoanToValueRatio

# Liste aller Datensätze
var records = ["2018-08-24", "2018-09-24", "2018-10-24"];

# ein Datensatz
var record = 
{
    "date": "2018-11-24"
    "volume": "6000",
    "credit": "4000",
    "balance": "-2000",
    "rate": "0,0399",
    "assetClasses": 
    [
        {
            "subDescription": "Euro-Anleihen inländischer Emittenten",
            "subVolume": "1000",
            "subLoanToValueRatio": "0,8"
        },
        {
            "subDescription": "Aktien-ETFs",
            "subVolume": "3000",
            "subLoanToValueRatio": "0,7"
        },
        {
            "subDescription": "Weitere ausländische Aktien",
            "subVolume": "2000",
            "subLoanToValueRatio": "0,3"
        },
    ]
};

# Schreiben eines Datensatzes
localStorage.setItem(record.date, JSON.stringify(record));
records.push(record.date);
localStorage.setItem("records", records);

# Lesen eines Datensatzes
var record = localStorage.getItem(records[1]); # "2018-09-24";
```

### Kennzahlen
Kennzahl|Berechnung|Beschreibung
--------|----------|------------
Sollzinsen p.a.|Kontostand * Sollzinssatz|In einem Jahr fällige Zinszahlungen
Verfügbarer Betrag|Beleihungswert + Kontostand|um wie viel der Kredit noch genutzt werden kann
Beleihungsquote|Beleihungswert / Depotvolumen|Verschiedene Anlageklassen können zu unterschiedlichen Prozentsätzen beliehen werden. Mit der Beleihungsquote ergibt sich ein individueller Prozentsatz abhängig von der Depotzusammenstellung.
Beleihungswertausnutzung|(Kontostand / Beleihungswert) * (-1)|Verhältnis des in Anspruch genommenen Kredits zum Beleihungswert
Eigenkapital|Depotvolumen + Kontostand|Wie hoch ist das Eigenkapital? (Kontostand ist negativ)
Eigenkapitalquote|(Depotvolumen + Kontostand) / Depotvolumen|Verhältnis von Eigenkapital zum gesamten Depotvolumen (Kontostand ist negativ)
Verschuldungsgrad|Kontostand / (Depotvolumen + Kontostand)|Verschuldungsgrad von 50 % bedeutet, dass für 100 € Eigenkapital 50 € des Kredits beansprucht ist
verkraftbarer Kursrückgang|Depotvolumen – (Kontostand / Beleihungsquote * -1)|Wie weit kann das Depotvolumen sinken ohne, dass der in Anspruch genommene Kredit den Beleihungswert übersteigt?
Maximales Depotvolumen|1 / (1 – Beleihungsquote) * Depotvolumen|Theoretisch maximales Depotvolumen wenn Kredit immer wieder reinvestiert wird und Beleihungswert gleich den Schulden ist
Maximales Fremdkapital|Maximales Depotvolumen - Eigenkapital|Theoretisch maximales Fremdkapital unter Einhaltung der Regeln des Kreditvertrags
Maximale Neuinvestition|Maximales Fremdkapital + Kontostand|Theoretisch maximale Neuinvestition in Wertpapiere unter Einhaltung der Regeln des Kreditvertrags
Hebel|Depotvolumen / Eigenkapital|Wie stark ist das Eigenkapital gehebelt?
Margin|100 - (Kontostand / Eigenkapital)|Sicherheitspuffer

### Simulationen

Für die Simulationen werden weitere Eingabefelder benötigt die nicht gespeichert werden. Die Simulationen zeigen sich in der Veränderung der Kennzahlen und, je nach Simulation, in zusätzlichen Berechnungen.

#### Wie wirken sich Zukäufe auf den WPK aus?
Zusätzliche Parameter:
- Anlageklassen + Beträge
    - In welche Anlageklasse soll mit welchen Betrag investiert werden?
- Eigenkapital
    - Wie viel der Neuinvestition ist Eigenkapital?

Daraus lässt sich dann das verwendete Fremdkapital und somit die Auswirkungen auf den Kredit ermittelt werden.

#### Wie wirken sich Verkäufe auf den WPK aus?
Zusätzliche Parameter:
- Anlageklassen + Beträge
    - Aus welcher Anlageklasse woll wie viel verkauft werden?

#### Wie wirken sich die Zinsen auf den Kredit aus?
Zusätzliche Parameter:
- Jahre
    - Zeitraum der betrachtet werden soll
- Ein-/Auszahlungen
    - Die voraussichtlichen Ein- bzw. Auszahlungen auf dem Kreditkonto während diesem Zeitraum.
- Schalter
    - (1) Es wird angenommen, dass die Ein-/Auszahlungen gleichmäßig über den betrachteten Zeitraum verteilt werden.
    - (2) Die Ein-/Auszahlungen werden zu Beginn der Zeitdauer gebucht.

Als zusätzliche Kennzahl wird die Summe der Zinszahlungen berechnet.

#### Wie lange kann man einen Sparplan finanzieren?
Zusätzliche Parameter:
- Jahre
- monatliche Rate
- Anlageklasse
- Eigenkapital

Als zusätzliche Kennzahl kann die theoretisch maximale Laufzeit wie lange sich der Kredit im Kreditrahmen bewegen wird ausgegeben werden.

#### Wie wirken sich Kursveränderungen auf den Kredit aus?
Zusätzliche Parameter:
- Anlageklasse + Kursveränderung