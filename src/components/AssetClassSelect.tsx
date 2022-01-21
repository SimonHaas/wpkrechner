import Select from "react-select";
import { OptionType } from "./Inputs";

export default function AssetClassesSelect(props: {
  options: OptionType[];
  selectAssetClass: (index: number) => void;
}) {
  return (
    <div className="asset-item">
      <div className="eingabe-title">
        <label>Anlageklasse</label>
      </div>
      <div className="dropdown">
        <Select
          options={props.options}
          defaultValue={props.options[0]}
          onChange={(selectedOption) => {
            if (selectedOption) {
              props.selectAssetClass(+selectedOption.value);
            }
          }}
        />
      </div>
    </div>
  );
}
