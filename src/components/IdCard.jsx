import React from "react";

function IdCard(props) {
  return (
    <div className="IdCard">
      <p>
        <b>First name:</b> {props.firstName}
      </p>
      <p>
        <b>LastName</b> {props.lastName}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Height:</b> {props.height} cm
      </p>
      <p>
        <b>Birth:</b> {props.birth.getYear()}
      </p>
      <p>
        <b>picture:</b>
        <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
      </p>
    </div>
  );
}

export default IdCard;
