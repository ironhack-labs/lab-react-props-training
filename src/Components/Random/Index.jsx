import React from "react";
import "./Random.css";

const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1));
  const text = `Random value between ${min} and ${max} => ${randomValue}`;

  return (
    <div className="box">
      <p>{text}</p>
    </div>
  );
};

export default Random;
