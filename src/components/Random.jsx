import React from 'react';

const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  
  const greenStyle = {
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    padding: '10px',
    margin: '10px',
    borderRadius: '4px',
    fontSize: '20px'
  };

  return (
    <div style={greenStyle}>
      Random value between {min} and {max} ={'>'} {randomValue}
    </div>
  );
};

export default Random;