import React from "react";
import './IdCard.css'

function IdCard({ image, firstName, lastName, gender, height, birth }) {
  return (
    <div className="id-card">
      <img src={image} alt="User" />
      <div className="text">
      <b> First name: </b> {firstName}
      <b>Last name: </b> {lastName}
      <b>Gender: </b> {gender}
      <b>Height: </b> {height}
      <b>Birth: </b> {birth}
      </div>
    </div>
  );
}

export default IdCard;
