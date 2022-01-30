import Select from 'react-select';
import { Snapshot } from 'wpk';
import { OptionType } from './Inputs';

function SnapshotSelect(props: {
  options: OptionType[];
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="dropdown-daten">
      <Select options={props.options} onChange={selectedOption => {
        if (selectedOption) {
          props.setSnapshot(Snapshot.fromJson(selectedOption.value))
        }
      }} />
    </div>
  );
}

export default SnapshotSelect;
