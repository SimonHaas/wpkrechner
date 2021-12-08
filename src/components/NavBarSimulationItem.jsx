import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function NavBarSimulationItem({ title, to }) {
  const location = useLocation();
  return (
    <Link to={to} className={location.pathname === to ? "active" : ""}>
      <div className="title">{title}</div>
    </Link>
  );
}
