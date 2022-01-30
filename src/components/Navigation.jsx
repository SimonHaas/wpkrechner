import NavigationItem from './NavigationItem'
import { FaCalculator, FaChartLine, FaInfoCircle } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <span className="icon"></span>
                    <span className="title">
                        <h2>WPK-Rechner</h2>
                    </span>
                </li>
                <NavigationItem title='Information' to='/' icon={<FaInfoCircle />} />
                <NavigationItem title='Rechner' to='/rechner' icon={<FaCalculator />} />
                <NavigationItem title='Simulation' to='/simulation' icon={<FaChartLine />} />
            </ul>
        </div>
    )
}
