import React from 'react';

function IdCard(props) {
  return (
    <div className="idCard">
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
      <div className="idCardInfo">
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}cm</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
