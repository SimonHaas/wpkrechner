import NavigationItem from './NavigationItem'
import { FaCalculator, FaChartLine, FaHome, FaInfoCircle } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <span class="icon"></span>
                    <span class="title">
                        <h2>WPK-Rechner</h2>
                    </span>
                </li>
                <NavigationItem title='Information' to='/' icon={<FaInfoCircle />} />
                <NavigationItem title='Dashboard' to='/dashboard' icon={<FaHome />} />
                <NavigationItem title='Rechner' to='/rechner' icon={<FaCalculator />} />
                <NavigationItem title='Simulation' to='/simulation' icon={<FaChartLine />} />
            </ul>
        </div>
    )
}
