import React from "react";
function IdCard(props) {
  return (
    <div className="IdCard">
      <div>
        <img src={props.picture}></img>
      </div>
      <div className="text">
        <h3>First name: {props.firstName}</h3>
        <h3>Last name: {props.lastName}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>Height: {props.height /100}m</h3>
        <h3>Birth: {props.birth.toDateString()}</h3>
      </div>
    </div>
  );
}
export default IdCard;
