import Container from "../SimulationContainer";
export default function Verkäufe() {
  return (
    <div>
      <div className="containerLeft-header">
        <h3>Verkäufe</h3>
      </div>
      <Container title="Staatsanleihen" />
      <Container title="Inländische Aktien" />
    </div>
  );
}
