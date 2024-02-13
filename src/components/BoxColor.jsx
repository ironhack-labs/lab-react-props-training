import React from "react";

function BoxColor({ r, g, b }) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: "100px",
    border: "1px solid #000",
    margin: "10px",
  };

  return (
    <div className="box" style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
