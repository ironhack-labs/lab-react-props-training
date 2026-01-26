import React from "react";

import "./IdCard.css";

function IdCard(props) {
  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  return (
    <div className="id-card">
      <img src={props.picture} alt="image" />
      <div>
        <p>
          <span>First name:</span> {props.firstName}
        </p>
        <p>
          <span>Last name:</span> {props.lastName}
        </p>
        <p>
          <span>Gender:</span> {props.gender}
        </p>
        <p>
          <span>Height:</span> {props.height}
        </p>
        <p>
          <span>Birth:</span> {formatDate(props.birth)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
