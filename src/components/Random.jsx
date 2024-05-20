import React from "react";

function Random(props) {
  const formula = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <p id="greetings">
      Random value between {props.min} and {props.max} = {formula}
    </p>
  );
}

export default Random;
