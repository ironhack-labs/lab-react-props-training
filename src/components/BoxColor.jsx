import React from 'react';

function BoxColor(props) {

  const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;


  const divStyle = {
    backgroundColor: backgroundColor,
    border: '2px solid black',
    margin: '10px',
    padding: '20px',
    textAlign: 'center',
    fontSize: '18px'
  };

  return (
    <div style={divStyle}>
      <p>rgb({props.r},{props.g},{props.b})</p>
    </div>
  );
}

export default BoxColor;
