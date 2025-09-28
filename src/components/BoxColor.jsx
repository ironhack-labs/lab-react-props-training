import React from "react";

function BoxColor({ r, g, b }) {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div
      style={{
        backgroundColor: rgbColor,
        color: "black",
        width: "300px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4px",
        border: "2px solid black",
      }}
    >
      {rgbColor}
    </div>
  );
}

export default BoxColor;
