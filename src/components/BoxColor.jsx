import React from "react";
const divStyle = {};
function BoxColor({ r, g, b }) {
  const letterR = Math.min(255, Math.max(0, r));
  const letterG = Math.min(255, Math.max(0, g));
  const letterB = Math.min(255, Math.max(0, b));
  const backgroundColor = `rgb(${letterR}, ${letterG}, ${letterB})`;
  const boxStyle = {
    width: "200px",
    height: "100px",
    backgroundColor: backgroundColor,
    border: "1px solid black",
    margin: "10px 0",
    textAlign: "center",
    lineHeight: "100px",
    color: "white",
  };
  return (
    <div style={boxStyle}>
      rgb({letterR}, {letterG}, {letterB})
    </div>
  );
}

export default BoxColor;