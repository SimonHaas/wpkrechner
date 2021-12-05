export default function Container({ title }) {
  return (
    <div>
      <div className="row">
        <div className="column-regler">
          <div className="containerItem">
            <div className="containerItem-title">
              <h3>{title}</h3>
            </div>
            <input type="number"></input>
          </div>
          {/*<input
            id="slider"
            className="range-slider"
            type="range"
            min="1"
            max="100"
            step="0.5"
            value="1"
          ></input>*/}
        </div>
      </div>
    </div>
  );
}
