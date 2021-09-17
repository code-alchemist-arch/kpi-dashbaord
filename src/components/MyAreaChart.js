import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { MyTooltip } from "./MyTooltip";

const data = [
  {
    name: "Page A",
    uv: 100,
  },
  {
    name: "Page B",
    uv: 300,
  },
  {
    name: "Page I",
    uv: 600,
  },
  {
    name: "Page J",
    uv: 400,
  },
  {
    name: "Page K",
    uv: 900,
  },
  {
    name: "Page C",
    uv: 400,
  },
  {
    name: "Page D",
    uv: 478,
  },
  {
    name: "Page E",
    uv: 489,
  },
  {
    name: "Page F",
    uv: 439,
  },
  {
    name: "Page G",
    uv: 500,
  },
  {
    name: "Page H",
    uv: 700,
  },
  {
    name: "Page L",
    uv: 1100,
  },
  {
    name: "Page M",
    uv: 500,
  },
];

export const MyAreaChart = ({ color }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip content={<MyTooltip />} />
        <Area
          type="monotone"
          dataKey="uv"
          fill={color}
          strokeWidth={0}
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
