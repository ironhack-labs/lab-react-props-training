import React from "react";
import "./styleRating.css";

export const Rating = (props) => {
  let rating = Math.round(props.children);
  return (
    <div>
      {rating < 1 ? (
        <p>☆☆☆☆☆</p>
      ) : rating < 2 ? (
        <p>★☆☆☆☆</p>
      ) : rating < 3 ? (
        <p>★★☆☆☆</p>
      ) : rating < 4 ? (
        <p>★★★☆☆</p>
      ) : rating < 5 ? (
        <p>★★★★☆</p>
      ) : (
        <p>★★★★★</p>
      )}
    </div>
  );
};
