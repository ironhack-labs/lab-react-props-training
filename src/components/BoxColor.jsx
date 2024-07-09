import React from "react";

function BoxColor(props) {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`
  return (
    <div className="container" style={{ backgroundColor: color, width: "200px", height: "80px", border: "1px solid black", padding: "10px", margin: "10px", display: "flex", }}>
      rgb ({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
