import Select from "react-select";
import { Snapshot } from "wpk";

export default function AssetClassesSelect(props: {
  snapshot: Snapshot;
  selectAssetClass: (index: number) => void;
}) {
  if (!props.snapshot.activeAssetClasses) {
    return (null)
  }

  let options = [{ value: "-1", label: "keine Angabe" }];
  for (let i = 0; i < props.snapshot.getUserAssetClasses().length; i++) {
    options = [
      ...options,
      {
        value: (i + 1).toString(),
        label: props.snapshot.getUserAssetClasses()[i].title,
      },
    ];
  }

  return (
    <div className="asset-item">
      <div className="eingabe-title">
        <label>Anlageklasse</label>
      </div>
      <div className="dropdown">
        <Select
          options={options}
          defaultValue={options[0]}
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
