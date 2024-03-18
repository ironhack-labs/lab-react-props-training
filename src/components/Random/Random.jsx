import React from "react";

import "./Random.css";

function Random(props) {
  let random = Math.floor(Math.random() * (props.max - props.min) + props.min);
  return (
    <div className="random">
      <p>{`Random value between ${props.min} and ${props.max} => ${random}`}</p>
    </div>
  );
}

export default Random;
