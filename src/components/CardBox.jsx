import Card from "./Card";
import DashboardLineChart from "./charts/LineChart.jsx";

export default function CardBox() {
  return (
    <div>
      <div className="cardBox">
        <Card
          title="Depotvolumen"
          value="5000"
          chart={<DashboardLineChart />}
        ></Card>
        <Card
          title="Depotvolumen"
          value="5000"
          chart={<DashboardLineChart />}
        ></Card>
        <Card
          title="Depotvolumen"
          value="5000"
          chart={<DashboardLineChart />}
        ></Card>
        <Card
          title="Depotvolumen"
          value="5000"
          chart={<DashboardLineChart />}
        ></Card>
      </div>
    </div>
  );
}
