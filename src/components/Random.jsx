import React from "react";

function Random(props) {
  const randomValue = Math.floor(Math.random() * (props.max - props.min + 1) - props.min);

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      Random value between {props.min} and {props.max} = {randomValue}
    </div>
  );
}

export default Random;
