import React from "react";

function Random(props) {
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }
  const rndInt = getRandomInt(props.min, props.max);

  return (
    <>
      <div>Your random number is {rndInt}</div>
    </>
  );
}

export default Random;
