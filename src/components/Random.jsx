import React from "react";

function Random(props) {
  let number =
    Math.floor(Math.randomandom() * (props.max - props.min + 1)) + props.min;
  return (
    <div>
      <p>
        Random Value between {props.min} and {props.max} = {number}{" "}
      </p>
    </div>
  );
}

export default Random;
