import React from "react";
import "./IdCard.css";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const newDate = birth.toISOString().split("T")[0];

  return (
    <div className="card">
      <div className="photo">
        <img src={picture} alt={firstName} />
      </div>
      <div className="info-block">
        <p>
          <span>First name: </span>
          {firstName}
        </p>
        <p>
          <span>Last name: </span>
          {lastName}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Height: </span>
          {height}
        </p>
        <p>
          <span>Birth: </span>
          {newDate}
        </p>
      </div>
    </div>
  );
};
export default IdCard;
