import React from "react";

export const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="container">
      <img src={picture} />
      <div>
        <p>First Name: {firstName} </p>
        <p>Last Name {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height / 100}m </p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
