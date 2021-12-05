import Container from "../SimulationContainer";

export default function Kursveränderung() {
  return (
    <div>
      <div className="containerLeft-header">
        <h3>Kursveränderung</h3>
      </div>
      <Container title="Staatsanleihen" />
      <Container title="Inländische Aktien" />
    </div>
  );
}
