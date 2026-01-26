import React from "react";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardTypeImage =
    type === "Visa"
      ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg";

  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
      <div className="credit-card-type">
        <img src={cardTypeImage} alt={type} />
      </div>
      <div className="credit-card-number">{maskedNumber}</div>
      <div className="credit-card-details">
        <span>Expires {expirationMonth.toString().padStart(2, "0")}/{expirationYear}</span>
        <span>{bank}</span>
      </div>
      <div className="credit-card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
