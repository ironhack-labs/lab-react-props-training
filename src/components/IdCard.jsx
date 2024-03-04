import React from "react";

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <p>Last Name: {lastName}</p>
      <p>First Name: {firstName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height} cm</p>
      <p>Birth: {birth.toDateString()}</p>
      <img src={picture} alt="Profile" />
    </div>
  );
};
export default IdCard;
