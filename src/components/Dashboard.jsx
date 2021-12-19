import "../styling/dashboard.css";
import CardBox from "./CardBox.jsx";
import OverviewDashboard from "./OverviewDashboard";

export default function Dashboard() {
  return (
    <div>
      <div className="welcome">
        <h4>Welcome!</h4>
        <div className="mainpage-dashboard">
          <CardBox />
          <div className="spacer"></div>
          <OverviewDashboard />
        </div>
      </div>
    </div>
  );
}
