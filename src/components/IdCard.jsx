import React from "react";

function IdCard({ lastName, firstName, gender, height, picture }) {
  //   const { lastName, firstName, gender, height, picture } = props;

  return (
    <div>
      <p>Last Name: {lastName}</p>
      <p>First Name: {firstName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height} cm</p>
    </div>
  );
}

export default IdCard;
