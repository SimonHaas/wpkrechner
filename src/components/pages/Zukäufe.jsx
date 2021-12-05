import Container from "../SimulationContainer";

export default function Zukäufe() {
  return (
    <div>
      <div className="containerLeft-header">
        <h3>Zukäufe</h3>
      </div>
      <Container title="Staatsanleihen" />
      <Container title="Inländische Aktien" />
      <Container title="Eigenkapital" />
    </div>
  );
}
