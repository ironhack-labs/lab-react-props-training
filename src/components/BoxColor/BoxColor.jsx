import React from "react";
import "./styleBoxColor.css";

export const BoxColor = (props) => {
  let hex = ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b)
    .toString(16)
    .slice(1);
  return (
    <div
      className="containerBoxColor"
      style={{
        color: `${props.r === 255 ? "white" : "black"}`,
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>#{hex}</p>
    </div>
  );
};
