import React from "react";

const Random = (props) => {
  const randomResult = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div>
      Random value between {props.min} and {props.max} => {randomResult}
    </div>
  );
};

export default Random;
