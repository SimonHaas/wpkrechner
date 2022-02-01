import { FaMinusCircle } from 'react-icons/fa'
import { AssetClass } from '@simonhaas/wpk-rechner'

export default function AssetClassInput(props: {index: number, assetClass: AssetClass, removeAssetClass: (assetClass: AssetClass) => void, updateAssetClass: (index: number, field: string, value: string) => void}) {
    return (
        <>
        <FaMinusCircle className='delete' onClick={() => props.removeAssetClass(props.assetClass)}></FaMinusCircle>
        <div className="eingabeItem">
            <div className="eingabe-title">
                <label>Bezeichnung</label>
                <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
                <input
                    type="text"
                    placeholder="Bezeichnung"
                    value={props.assetClass.title || ''}
                    onChange={(e) => props.updateAssetClass(props.index, 'title', e.target.value)}
                />
            </div>
        </div>
        <div className="eingabeItem">
            <div className="eingabe-title">
                <label>Beleihungsquote in %</label>
                <div className="underLine"></div>
            </div>
            <div className="eingabe-form">
                <input
                    type="number"
                    placeholder="Beleihungsquote"
                    value={Math.round((props.assetClass.loanToValue * 100 + Number.EPSILON) * 100) / 100 || ''}
                    onChange={(e) => props.updateAssetClass(props.index, 'loanToValue', e.target.value)}
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
                    placeholder="Wert"
                    value={props.assetClass.volume || ''}
                    onChange={(e) => props.updateAssetClass(props.index, 'volume', e.target.value)}
                />
            </div>
        </div>
        </>
    );
}
