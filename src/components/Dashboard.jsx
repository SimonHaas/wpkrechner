import "../styling/dashboard.css";
import CardBox from "./CardBox.jsx";

export default function Dashboard() {
  return (
    <div>
      <div className="welcome">
        <h4>Welcome!</h4>
        <CardBox />
      </div>
    </div>
  );
}
