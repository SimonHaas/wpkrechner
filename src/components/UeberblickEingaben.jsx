import "../styling/simulation.css";

export default function UeberblickEingaben() {
  return (
    <div className="eingaben-ueberblick">
      <div className="cardBox-header">
        <h3>Aktueller Stand</h3>
      </div>
      <div className="cardsSimulation">
        <div className="cardSimulation">
          <div class="cardNameSimulation">
            <h3>Beleihungswert</h3>
          </div>
          <div class="underLine"></div>
          <div class="number">5.000 €</div>
        </div>
        <div className="cardSimulation">
          <div class="cardNameSimulation">
            <h3>Depotvolumen</h3>
          </div>
          <div class="underLine"></div>
          <div class="number">5.000 €</div>
        </div>
        <div className="cardSimulation">
          <div class="cardNameSimulation">
            <h3>Beleihungswert</h3>
          </div>
          <div class="underLine"></div>
          <div class="number">5.000 €</div>
        </div>
        <div className="cardSimulation">
          <div class="cardNameSimulation">
            <h3>Beleihungswert</h3>
          </div>
          <div class="underLine"></div>
          <div class="number">5.000 €</div>
        </div>
      </div>
    </div>
  );
}
