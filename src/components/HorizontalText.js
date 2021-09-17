import React from "react";

const HorizontalText = ({ text }) => {
  return (
    <p
      style={{
        margin: 0,
        marginLeft: 30,
        fontSize: 18,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "center"
      }}
    >
      {text}
    </p>
  );
}

export default HorizontalText;