import React from "react";
import visaImage from "../assets/images/visa.png";
import mastercardImage from "../assets/images/master-card.svg";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const cardLogo = type === "visa" ? visaImage : mastercardImage;
  const hideNumber = `.... .... .... ${number.slice(-4)}`;
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: "250px",
        padding: "20px",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <img
        src={cardLogo}
        alt={type}
        style={{ width: "50px", height: "50px" }}
      />
      <p>{hideNumber}</p>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
