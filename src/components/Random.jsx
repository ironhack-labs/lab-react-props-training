import React from "react";

export const Random = ({ min, max }) => {
  return (
    <div className="random">
      <p>{min}</p>
      <p>{max}</p>
    </div>
  );
};
