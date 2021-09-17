import React from "react";
import { numberToMoneyString } from "../utils/helper";

const MyTooltipRow = ({ value, label, color }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "10px", height: "10px", backgroundColor: color, marginRight: "10px" }} />
      <p style={{ margin: "0px", color: "black", fontSize: 16 }}>
        {label}: <b>{value}</b>
      </p>
    </div>
  );
};

export const MyTooltip = (props) => {
  const { active, payload, label, color, overrideParams } = props;
  if (!payload) return null;

  const filteredPayload = overrideParams ? payload.filter(item => {
    return overrideParams.includes(item.name)
  }) : payload;


  if (active) {
    let rows = filteredPayload.map((item) => {
      const parsedValue = item.name === 'spend' ? '$' + numberToMoneyString(item.value) : item.value + '%'
      return (
        <MyTooltipRow
          key={`${item.name}-tooltip-item`}
          label={label}
          color={color}
          value={parsedValue}
        />
      );
    });

    return (
      <div
        style={{
          background: "white",
          boxShadow: "0px 8px 20px rgba(19, 20, 32, 0.25)",
          borderRadius: 4,
          padding: "0.3rem 0.8rem",
        }}
      >
        {rows}
      </div>
    );
  }

  return null;
};
