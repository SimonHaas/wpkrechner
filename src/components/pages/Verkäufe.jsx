export default function Verkäufe() {
  return (
    <div>
      <div className="containerLeft-header">
        <h3>Verkäufe</h3>
      </div>
      <div className="row">
        <div className="column-regler">
          <div className="containerItem">
            <div className="containerItem-title">
              <h3>Beleihungswert</h3>
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
        <div className="column-regler">
          <div className="containerItem">
            <div className="containerItem-title">
              <h3>Test</h3>
            </div>
            <input type="number"></input>
          </div>
          {/*<input
                  type="range"
                  min="1"
                  max="100"
                  step="0.5"
                  value="0"
                ></input>*/}
        </div>
      </div>
    </div>
  );
}
