import React from "react";

function CreditCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: '300px',
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: "5px",
      }}    
    >
        <div>
            <p> {props.type} </p>
            <h3 style={{textAlign: "center", alignContent: "space-evenly"}}> {props.number} </h3>
      <p  style={{
          display: "flex",
          flexDirection: "row",}}>
        Expires {props.expirationMonth}/{props.expirationYear}{"          "}{props.bank}
      </p>
      <p> {props.owner} </p>

        </div>
    </div>
  );
}

export default CreditCard;
