import React from 'react';

function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    padding: '20px',
    margin: '10px 0',
    color: 'white'
  };

  // Function to convert rgb to hex
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + (b)).toString(16).slice(1);
  }

  return (
    <div style={divStyle}>
      rgb({props.r},{props.g},{props.b})<br />
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  );
}

export default BoxColor;
