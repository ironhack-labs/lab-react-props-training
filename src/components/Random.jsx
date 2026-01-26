import React from "react";

const Random = (props) => {
  const { min, max } = props;
  const getRandomNum = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <p>{getRandomNum()}</p>
    </div>
  );
};
export default Random;
