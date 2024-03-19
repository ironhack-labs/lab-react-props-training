import React from "react";
import "./idCard.css";

function IdCard(props) {
  return (
    <div className="IdCardContainer">
      <img src={props.picture} alt="" />
      <div className="infoId">
        <p>
          <span>First name</span> : {props.firstName}
        </p>
        <p>
          <span>Last name</span> : {props.lastName}
        </p>
        <p>
          <span>Gender</span> : {props.gender}
        </p>
        <p>
          <span>Height</span> : {props.height / 100}m
        </p>
        <p>
          <span>Birth</span>: {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
