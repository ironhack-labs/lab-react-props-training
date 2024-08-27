import React from "react";

function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r},${g},${b})`;
  //   const hex = `#{((1 << 24) + (r << 16) + (g << 8) + b)
  //     .toString(16)
  //     .slice(1)}`;
  return (
    <div
      style={{
        backgroundColor: rgb,
        padding: "10px",
        margin: "10px",
        color: "white",
      }}
    >
      <p>{rgb}</p>
      {/* <p>{hex}</p> */}
    </div>
  );
}

export default BoxColor;
