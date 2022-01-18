import Select from 'react-select';
import { OptionType } from './Inputs';

export default function AssetClassesSelect(props: {
    options: OptionType[];
    selectAssetClass: (index: number) => void;
}) {
    return (
        <div className="dropdown-daten">
            <div className="eingabe-title">
                <label>Anlageklasse</label>
                <div className="underLine"></div>
            </div>
            <Select options={props.options} defaultValue={props.options[0]} onChange={selectedOption => {
                if (selectedOption) {
                    props.selectAssetClass(+selectedOption.value)
                }
            }} />
        </div>
    );
}
