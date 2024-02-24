import React from 'react';

function Random(props) {
  
  const { min, max } = props;

  
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

 
  return (
    <p>Random value between {min} and {max}: {randomInt}</p>
  );
}

export default Random;