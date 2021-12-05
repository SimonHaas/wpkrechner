import Container from "../SimulationContainer";

export default function Zinsen() {
  return (
    <div>
      <div className="containerLeft-header">
        <h3>Zinsen</h3>
      </div>
      <Container title="Jahre" />
      <Container title="Ein-/Auszahlungen" />
    </div>
  );
}
