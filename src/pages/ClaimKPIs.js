import React from "react";
import { Link } from "react-router-dom";
import { MyLineChart } from "../components/MyLineChart";
import HorizontalText from "../components/HorizontalText";

export const ClaimKPIs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link to="/" style={{
        fontSize: 14,
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'white'
      }}>
        Back to Dashboard
      </Link>
      <div>
        <div
          style={{
            position: "relative",
            width: 500,
            height: 300,
          }}
        >
          <HorizontalText text="Claims ratio, rolling 28 days" />
          <MyLineChart symbol='$' dataKey="spend" />
        </div>
        <div
          style={{
            position: "relative",
            width: 500,
            height: 300,
          }}
        >
          <HorizontalText text="Payout ratio (paid claims to bind premiums)" />
          <MyLineChart symbol='%' dataKey="percentage" />
        </div>
      </div>
    </div>
  );
};
