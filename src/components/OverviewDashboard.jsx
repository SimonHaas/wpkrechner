import PortfolioChart from "./charts/pieChart.jsx";
import EigenkapitalChart from "./charts/AreaChart.jsx";

export default function OverviewDashboard() {
  return (
    <div>
      <div className="overview-box">
        <div className="portfolio">
          <h4>Portfolio</h4>
          <PortfolioChart />
        </div>
        <div className="kennzahl-chart">
          <h4>Title</h4>
        </div>
        <div className="Eigenkapital">
          <h4>Eigenkapital</h4>
          <EigenkapitalChart />
        </div>
      </div>
    </div>
  );
}
