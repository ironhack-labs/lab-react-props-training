import React from "react";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function BoxColor(props) {
  return (
    <div id="box-color"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width: "500px",
        height: "50px",
        marginBottom: "10px",
      }}
    >
      {`rgb(${props.r},${props.g},${props.b})`} <br />
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  );
}

export default BoxColor;
