import { Fragment } from 'react'
import { AssetClass } from 'wpk'
import AssetClassInput from './AssetClassInput'

export default function AssetClasses(props: { assetClasses: AssetClass[], removeAssetClass: (assetClass: AssetClass) => void, updateAssetClass: (index: number, field: string, value: string) => void }) {

    let assetClassesList: JSX.Element[] = []
    console.log(props.assetClasses)
    // TODO 'generiert' sollte eigentlich nie ausgegeben werden
    for (let i = 1; i < props.assetClasses.length; i++) {
        assetClassesList.push(<AssetClassInput key={i} index={i} assetClass={props.assetClasses[i]} removeAssetClass={props.removeAssetClass} updateAssetClass={props.updateAssetClass} />
        )
    }

    return <>{assetClassesList}</>
}
