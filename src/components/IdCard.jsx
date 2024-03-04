import React from "react";

export const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="idcard">
      <p>Last Name: {lastName} </p>
      <p>Fisrt Name: {firstName} </p>
      <p>Gender: {gender} </p>
      <p> Height: {height} m</p>
      <p> Birth: {birth.toString()} </p>
      <img src={picture} alt={"picture"} />
    </div>
  );
};
