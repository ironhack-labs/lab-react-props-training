import React from "react";

export const BoxColor = ({ r, g, b }) => {
  const style = {
    backgroundColor: `rgb${r}, ${b}, ${g}`,
  };
  return (
    <div style={style}>
      ({r},{g},{b})
    </div>
  );
};
