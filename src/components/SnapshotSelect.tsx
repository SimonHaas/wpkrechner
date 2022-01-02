import Select from 'react-select'
import { Snapshot } from 'wpk';

function SnapshotSelect(props: {
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
}) {
  const savedSnapshots = JSON.parse(localStorage.getItem('snapshots') || '[]')

  type OptionType = {label: string, value: string}

  let options: OptionType[] = []
  savedSnapshots.forEach((snapshotObject: object) => {
    let snapshot: Snapshot = Snapshot.fromJson(JSON.stringify(snapshotObject))
    options.push({value: JSON.stringify(snapshot), label: new Date(snapshot.date).toLocaleDateString() + ' Kontostand: ' + snapshot.balance})
  });

  return (
    <div className="dropdown-daten">
      <Select options={options} onChange={selectedOption => {
        if (selectedOption) {
          props.setSnapshot(Snapshot.fromJson(selectedOption.value))
        }
      }} />
    </div>
  );
}

export default SnapshotSelect;
