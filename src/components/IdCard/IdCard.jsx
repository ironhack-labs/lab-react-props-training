import React from "react";
import "./styleIdCard.css";

export const IdCard = (props) => {
  return (
    <div className="containerIdCard">
      <img src={props.data.picture} alt="picture" />
      <div>
        <p>
          <span>First name:</span>
          {props.data.firstName}
        </p>
        <p>
          <span>Last name:</span>
          {props.data.lastName}
        </p>
        <p>
          <span>Gender:</span>
          {props.data.firstName}
        </p>
        <p>
          <span>Height:</span>
          {props.data.height}
        </p>
        <p>
          <span>Birth:</span>
          {props.data.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};
