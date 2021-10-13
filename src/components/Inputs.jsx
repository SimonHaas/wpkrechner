import AssetClasses from './AssetClasses'
import EssentialInputs from './EssentialInputs'

export default function Inputs() {
        return (
        <div className="eingabenBox">
            {/* Beides in eine Form */}
            <EssentialInputs />
            <AssetClasses />
        </div>
    )
}
