import React from 'react';

function BoxColor({ r, g, b }) {

  const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;


  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white', 
    padding: '20px',
    margin: '10px 0',
    textAlign: 'center',
  };

  return (
    <div style={boxStyle} className="d-flex align-items-center border border-dark p-2 mb-3b-3 gap-3 container w-50 mx-auto mt-3">
      <p>rgb({r}, {g}, {b})</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;
