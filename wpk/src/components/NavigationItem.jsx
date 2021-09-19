import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function NavigationItem({ title, to, icon }) {
  const location = useLocation()
  
  return (
        <li>
            <Link to={to} className={location.pathname === to && "active"}>
                <span className="icon">
                    {icon}
                </span>
                <span className="title">{title}</span>
            </Link>
        </li>
    )
}
