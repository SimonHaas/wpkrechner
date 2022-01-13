import { Fragment } from 'react'
import { AssetClass } from 'wpk'
import AssetClassInput from './AssetClassInput'

export default function AssetClasses(props: {assetClasses: AssetClass[], removeAssetClass: (assetClass: AssetClass) => void}) {
    console.log("render assetClasses")
    let key = 0
    let assetClassesList = props.assetClasses.map(function(assetClass){
        if (assetClass.titel !== 'generated') {
            return <Fragment key={key++}>
              <AssetClassInput assetClass={assetClass} removeAssetClass={props.removeAssetClass} />
              </Fragment>
          } else {
            return null;
          }
      })

return  <>{ assetClassesList }</>
}
