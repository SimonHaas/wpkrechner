import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    ek: 4000,
  },
  {
    name: "February",
    ek: 3000,
  },
  {
    name: "March",
    ek: 2000,
  },
  {
    name: "April",
    ek: 2780,
  },
  {
    name: "Page E",
    ek: 1890,
  },
  {
    name: "Page F",
    ek: 2390,
  },
  {
    name: "Page G",
    ek: 3490,
  },
];

export default class EigenkapitalChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="ek" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
