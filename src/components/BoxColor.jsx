import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  const color = `rgb(${r},${g},${b})`;
  
  const boxStyle = {
    backgroundColor: color,
    color: r + g + b > 400 ? 'black' : 'white',
    height: '100px',
    margin: '10px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  };

  return (
    <div style={boxStyle}>
      <span>{color}</span>
      <span>{hex}</span>
    </div>
  );
};

export default BoxColor;