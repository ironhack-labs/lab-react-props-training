import React from "react";

function IdCard(props) {
  const { image, firstName, lastName, gender, height, birth } = props;
  return (
    <div>
      <img src={image} alt="User" />
      <b> First name: </b> {firstName}
      <b>Last name: </b> {lastName}
      <b>Gender: </b> {gender}
      <b>Height: </b> {height}
      <b>Birth: </b> {birth}
    </div>
  );
}

export default IdCard;
