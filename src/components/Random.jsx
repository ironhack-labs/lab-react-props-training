import React from "react";
import "./Random.css"

function Random(props) {

  let randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;


  return (
    <div id="number">
      <p>Random value between {props.min} and {props.max} = {randomNumber}</p>
    </div>
  );
}

export default Random;
