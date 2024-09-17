import React from "react";
import "./styleDriverCard.css";

export const DriverCard = (props) => {
  let rating = Math.round(props.rating);

  return (
    <div className="containerDriverCard">
      <div className="imgDriverCard">
        <img src={props.img} alt="" />
      </div>
      <div className="info">
        <p className="name">{props.name}</p>
        {rating < 1 ? (
          <p>☆☆☆☆☆</p>
        ) : rating < 2 ? (
          <p>★☆☆☆☆</p>
        ) : rating < 3 ? (
          <p>★★☆☆☆</p>
        ) : rating < 4 ? (
          <p>★★★☆☆</p>
        ) : rating < 5 ? (
          <p>★★★★✩</p>
        ) : (
          <p>★★★★★</p>
        )}
        <p className="car">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};
