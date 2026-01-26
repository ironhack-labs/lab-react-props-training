import React from "react";
const stylesList = {
  display: "flex",
  flexdirection: "row",
  border: "2px solid black",
  margin: "5px",
  padding: "5px",
  maxHeight: "200px",
};

function IdCard(props) {
  return (
    <div className="IdCard" style={stylesList}>
      <img className="IdCardImg" src={props.picture} alt="person's picture" />
      <ul className="IdCardInfo">
        <p>
          <span style={{fontWeight: "bold"}}>First name:</span>
          {props.firstName}
        </p>
        <p>
          <span style={{fontWeight: "bold"}}>Last name</span>: {props.lastName}
        </p>
        <p>
          <span style={{fontWeight: "bold"}}>Gender:</span>
          {props.gender}
        </p>
        <p>
          <span style={{fontWeight: "bold"}}>Height:</span>
          {props.height}
        </p>
        <p>
          <span style={{fontWeight: "bold"}}>Birth:</span>
          {props.birth.toLocaleDateString()}
        </p>
      </ul>
    </div>
  );
}

export default IdCard;
