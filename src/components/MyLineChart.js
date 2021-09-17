import React, { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { colors, MAXINT, tickStyle } from "../utils/constants";
import { numberToMoneyString } from "../utils/helper";
import { lineChartData } from "../utils/mockData";
import { MyTooltip } from "./MyTooltip";

export const MyLineChart = ({ symbol, dataKey, filters }) => {
  const [chartData, setChartData] = useState(lineChartData)
  const [min, setMin] = useState(MAXINT)
  const [max, setMax] = useState(-1)

  useEffect(() => {
    setChartData(prev => {
      return prev.map((item) => ({
        name: item.name,
        spend: Math.floor(item.spend + Math.random() * 100 * (Math.round(Math.random()) ? 1 : -1)),
        percentage: Math.min(100, Math.floor(item.percentage + Math.random() * 10 * (Math.round(Math.random()) ? 1 : -1))),
      }))
    })
  }, [filters])

  useEffect(() => {
    let minV = MAXINT, maxV = -1;
    for (let i = 0 ;  i < chartData.length ; i ++ ) {
      if (minV > chartData[i][dataKey]) { minV = chartData[i][dataKey]; }
      if (maxV < chartData[i][dataKey]) { maxV = chartData[i][dataKey]; }
    }
    setMin(minV)
    setMax(maxV)
  }, [dataKey, chartData])
  
  const ticks = useMemo(() => [Math.floor(min), Math.floor(min + (max-min) / 3), Math.floor(min + (max-min) / 3 * 2) , Math.floor(max)], [min, max]);

  const tickFormatter = (value) => {
    if (symbol === '$') {
      return '$' + numberToMoneyString(value)
    } else {
      return value + '%'
    }
  }

  return (
    <ResponsiveContainer width="100%"  aspect={2}>
      <LineChart
        data={chartData}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={tickStyle} />
        <YAxis tick={tickStyle} ticks={ticks} domain={[min, max]} tickFormatter= {tickFormatter}/>
        <Tooltip content={<MyTooltip color={colors.sea} />} />
        <Line dataKey={dataKey} stroke={colors.sea} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};
