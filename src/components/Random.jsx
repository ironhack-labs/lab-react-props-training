import React from "react";
const stylesList = { border: "2px solid black", margin: "5px" };
function Random(props) {
  const randomNumber = Math.floor(Math.random() * props.max);
  return (
    <div style={stylesList}>
      <p>
        Random value between {props.min} and {props.max} {"=>"} {randomNumber}{" "}
      </p>
    </div>
  );
}

export default Random;
