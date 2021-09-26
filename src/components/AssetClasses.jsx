import AssetClassInput from "./AssetClassInput";
import { FaPlusCircle } from 'react-icons/fa'

export default function AssetClasses() {
    return (
        <div>
            <AssetClassInput title="Staatsanleihen" value={2000} />
            <AssetClassInput title="Innländische Aktien" value={1000} />
            <FaPlusCircle />
        </div>
    )
}
