import React from 'react';

function Random(props) {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  const randomStyle = {
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '10px',
      marginBottom: '20px',
    };

  return <div style={randomStyle}>Random number between {min} and {max}: {randomNum}</div>;
}

export default Random;