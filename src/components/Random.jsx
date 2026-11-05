import React from 'react';

function Random(props) {

  const randomValue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div className="random-card">
      <p>Random value between {props.min} and {props.max} => {randomValue}</p>
    </div>
  );
}

export default Random;
