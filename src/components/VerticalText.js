import React from "react";

const VerticalText = ({text}) => {
  return (
    <p
      style={{
        position: 'absolute',
        left: 0,
        bottom: 30,
        top:0,
        minWidth: 22,
        transform: "rotate(-180deg)",
        fontSize: 18,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "left"
      }}
    >
      {text}
    </p>
  );
}

export default VerticalText;