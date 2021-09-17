import React from "react";
import { colors } from "../utils/constants";
import { MyAreaChart } from "./MyAreaChart";

export const DashboardCard = ({
  title,
  middleText,
  bottomText,
  bottomPercentage,
  type,
  rawData,
}) => {
  const middleTextColor =
    type === "warning" ? colors.darkPink : colors.darkGreen;
  const graphColor =
    type === "warning" ? colors.lightPink : colors.lightGreen;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "16px",
        boxShadow: "5px 5px 5px black",
        borderRadius: 5,
        width: 300,
        height: 180,
      }}
    >
      <span
        style={{
          fontSize: 16,
          color: "black",
          fontWeight: 500,
          textAlign: "left",
        }}
      >
        {title}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          height: "100%",
        }}
      >
        <span
          style={{
            fontSize: 64,
            color: middleTextColor,
            fontWeight: 600,
            marginTop: "auto",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          {middleText}
        </span>
        <span
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: 500,
            zIndex: 1,
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Prev. month: {bottomText} ({bottomPercentage}%)
        </span>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 0,
          }}
        >
          <MyAreaChart color={graphColor}/>
        </div>
      </div>
    </div>
  );
};
