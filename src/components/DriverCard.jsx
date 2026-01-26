import React from "react";
import Ratings from "./Ratings";

function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <p>{name}</p>
      <Ratings>{rating}</Ratings>
      <p>{img}</p>
      <p>{car.model}</p>
      <p>{car.licensePlate}</p>
    </div>
  );
}

export default DriverCard;
