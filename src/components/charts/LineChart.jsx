import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    number: 200,
  },
  {
    name: "Feb",
    number: 300,
  },
  {
    name: "Mar",
    number: 100,
  },
  {
    name: "Apr",
    number: 400,
  },
];

function DashboardLineChart() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <Line
            type="monotone"
            dataKey="number"
            stroke="#8884d8"
            strokeWidth="2"
            dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 1, r: 5 }}
            activeDot={{
              fill: "#2e4355",
              stroke: "#8884d8",
              strokeWidth: 2,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default DashboardLineChart;
