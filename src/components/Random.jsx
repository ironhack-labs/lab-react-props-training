import React from "react";

function Random(props) {
  const { min, max } = props;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <p>
        Random Value between {min} and {max} = {randomNnumber}
      </p>
    </div>
  );
}

export default Random;
