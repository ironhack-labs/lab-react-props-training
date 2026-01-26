import React from "react";

function BoxColor({ r, g, b }) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return <div style={boxStyle}>xxx</div>;
}

export default BoxColor;
