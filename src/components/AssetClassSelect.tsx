import Select from 'react-select';
import { AssetClass } from 'wpk';
import { OptionType } from './Inputs';

export default function AssetClassesSelect(props: {
  options: OptionType[];
  selectAssetClass: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="dropdown-daten">
      <Select options={props.options} onChange={selectedOption => {
        if (selectedOption) {
          props.selectAssetClass(AssetClass.fromJson(selectedOption.value))
        }
      }} />
    </div>
  );
}
