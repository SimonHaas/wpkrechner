import NavigationItem from './NavigationItem'
import { FaCalculator, FaChartLine, FaHome, FaInfoCircle } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <NavigationItem title='TODO remove' to='/todo_remove' icon={<FaInfoCircle />} />
                <NavigationItem title='Information' to='/' icon={<FaInfoCircle />} />
                <NavigationItem title='Dashboard' to='/dashboard' icon={<FaHome />} />
                <NavigationItem title='Rechner' to='/rechner' icon={<FaCalculator />} />
                <NavigationItem title='Simulation' to='/simulation' icon={<FaChartLine />} />
            </ul>
        </div>
    )
}
