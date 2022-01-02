import Select from 'react-select'

function SnapshotSelect(props: {
  setSnapshot: React.Dispatch<React.SetStateAction<any>>;
}) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className="dropdown-daten">
      <Select options={options} />
    </div>
  );
}

export default SnapshotSelect;
