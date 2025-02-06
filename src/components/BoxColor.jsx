import React from "react";

function BoxColor(props) {
  const r = props.r;
  const g = props.g;
  const b = props.b;

  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: backgroundColor,
        textAlign: "center",
        color: "#fff",
        lineHeight: "100px",
        fontWeight: "bold",
      }}
    ></div>
  );
}

export default BoxColor;
