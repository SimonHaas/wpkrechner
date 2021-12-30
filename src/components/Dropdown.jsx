import { useState } from "react";

function Dropwdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["22-12-2021", "01-01-2022"];
  return (
    <div className="dropdown-daten">
      <div className="dropdown-daten-button" onClick={(e) => setIsActive(!isActive)}>
        Datensätze
      </div>
      {isActive && (
        <div className="dropdown-daten-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-daten-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropwdown;
