export default function Card({title, value, chart}) {
  return (
    <div>
      <div className="card">
        <h4 className="cardName">{title}</h4>
        <div className="underLine"></div>
        <div className="ValueAndStats">
          <div className="value">{value}</div>
          <div className="stats">
              {chart}
          </div>
        </div>
      </div>
    </div>
  );
}
