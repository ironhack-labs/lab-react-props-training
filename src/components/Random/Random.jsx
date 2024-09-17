import React from "react";
import "./styleRandom.css";

export const Random = (props) => {
  let result = parseInt(Math.random() * (props.max - props.min) + props.min);
  return (
    <div className="containerRandom">
      <p>
        Random value between {props.min} and {props.max} {`=>`} {result}
      </p>
    </div>
  );
};
