import "../styling/simulation.css";

export default function UeberblickEingaben() {
  return (
    <div className="eingaben-ueberblick">
      <div className="cardBox-header">
        <h3>Aktueller Stand</h3>
        <h4>
          {new Date().toLocaleDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </h4>
      </div>
      <div className="cardBoxSimulation">
        <div class="card">
          <div class="cardName">
            <h3>Beleihungswert</h3>
          </div>
          <div class="underLine"></div>
          <div class="number">5.000 €</div>
        </div>
      </div>
    </div>
  );
}
