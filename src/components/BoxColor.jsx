
import React from 'react';

const BoxColor = ({ r, g, b }) => {
  
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const boxStyle = {
    backgroundColor: backgroundColor,
    padding: '10px',
    marginBottom: '20px',
  };


  return (
    <div style={boxStyles}>
      <p>RGB: {r}, {g}, {b}</p>
    </div>
  );
};

export default BoxColor;
