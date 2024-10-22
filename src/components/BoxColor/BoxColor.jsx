import { Component } from "react";


const BoxColor = ({ r, g, b }) => {
  const rgb = `rgb(${r},${g},${b})`;

  const rgbToHex = (r, g, b) => {
      return (
          "#" +
          [r, g, b]
              .map((x) => {
                  const hex = x.toString(16);
                  return hex.length === 1 ? "0" + hex : hex;
              })
              .join("")
      );
  };

  const hex = rgbToHex(r, g, b);

  const boxStyle = {
      backgroundColor: rgb,
      border: '2px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      margin: '12px',
      height: '100px',
      
  };

  return (
      <div style={boxStyle}>
          <p>
              {rgb} <br />
              {hex}
          </p>
      </div>
  );
};
export default BoxColor;