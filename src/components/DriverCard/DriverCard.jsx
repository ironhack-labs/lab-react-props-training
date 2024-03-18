import React from "react";

import "./DriverCard.css";

function DriverCard(props) {
  const rating = Math.round(props.rating);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }

  return (
    <div className="driver-card">
      <img src={props.img} alt="image" className="picture" />
      <div className="info">
        <p>{props.name}</p>
        <p>{stars}</p>
        <p>{`${props.car.model} ${props.car.licensePlate}`}</p>
      </div>
    </div>
  );
}

export default DriverCard;
