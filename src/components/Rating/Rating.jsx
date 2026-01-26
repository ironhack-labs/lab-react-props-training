import React from "react";

import "./Rating.css";

function Rating(props) {
  const rating = Math.round(props.children);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }

  return <div>{stars}</div>;
}

export default Rating;
