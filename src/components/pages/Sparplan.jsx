import Container from "../SimulationContainer";

export default function Sparplan() {
  return (
    <div>
      <div className="containerLeft-header">
        <h3>Sparplan</h3>
      </div>
      <Container title="Jahre" />
      <Container title="Monatliche Rate" />
      <Container title="Eigenkapital" />
    </div>
  );
  }
  