import React from "react";

function BoxColor({ r, g, b }) {
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  const textColor = luminance > 186 ? "black" : "white";

  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: textColor,
    padding: "20px",
    margin: "10px 0",
    borderRadius: "5px",
    textAlign: "center"
  };

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
