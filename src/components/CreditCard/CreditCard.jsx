import React from "react";

import "./CreditCard.css";

import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master-card.svg";

function CreditCard(props) {
  let image = props.type === "Visa" ? visa : masterCard;

  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  return (
    <div style={cardStyle} className="credit-card">
      <div>
        <img src={image} alt="type" className="type" />
      </div>
      <p className="number">{props.number}</p>
      <div>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
