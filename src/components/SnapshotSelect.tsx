import { useEffect, useState } from 'react';
import Select from 'react-select'
import { Snapshot } from 'wpk';

function SnapshotSelect(props: {
  snapshot: Snapshot;
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
}) {

  type OptionType = { label: string, value: string }

  const [options, setOptions] = useState<OptionType[]>();

  useEffect(() => {
    const savedSnapshots = JSON.parse(localStorage.getItem('snapshots') || '[]')
    let tempOptions: OptionType[] = []

    savedSnapshots.forEach((snapshotObject: object) => {
      let snapshot: Snapshot = Snapshot.fromJson(JSON.stringify(snapshotObject))
      tempOptions.push({ value: JSON.stringify(snapshot), label: new Date(snapshot.date).toLocaleDateString() + ' Kontostand: ' + snapshot.balance })
    });

    if (tempOptions) {
      setOptions(tempOptions)
    }

  }, [props.snapshot])

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
