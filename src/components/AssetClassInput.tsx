import { FaMinusCircle } from 'react-icons/fa'
import { AssetClass } from 'wpk'

export default function AssetClassInput(props: {assetClass: AssetClass, removeAssetClass: (assetClass: AssetClass) => void}) {
    return (
        <>
        <FaMinusCircle onClick={() => props.removeAssetClass(props.assetClass)}></FaMinusCircle>
        <div className="eingabeItem">
            <div className="eingabe-title">
                <label>Bezeichnung</label>
                <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
                <input
                    type="number"
                    placeholder="Sollzinssatz"
                    // value={props.snapshot.interestRate || ''}
                    // onChange={(e) => props.updateSnapshot("interestRate", e.target.value)}
                />
            </div>
        </div>
        <div className="eingabeItem">
            <div className="eingabe-title">
                <label>Beleihungsquote</label>
                <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
                <input
                    type="number"
                    placeholder="Sollzinssatz"
                    // value={props.snapshot.interestRate || ''}
                    // onChange={(e) => props.updateSnapshot("interestRate", e.target.value)}
                />
            </div>
        </div>
        <div className="eingabeItem">
            <div className="eingabe-title">
                <label>Wert</label>
                <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
                <input
                    type="number"
                    placeholder="Sollzinssatz"
                    // value={props.snapshot.interestRate || ''}
                    // onChange={(e) => props.updateSnapshot("interestRate", e.target.value)}
                />
            </div>
        </div>
        </>
    );
}
