import React from "react";
import "./styleCreditCard.css";
import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/masterCard.png";

export const CreditCard = (props) => {
  console.log(props.number.slice(-5, -1));

  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className="containerCreditCard"
    >
      {
        <div className="imgCreditCard">
          {props.type === "Visa" ? (
            <img src={visa} alt="icon visa" />
          ) : (
            <img src={masterCard} alt="icono masterCard" />
          )}
        </div>
      }
      <div className="numberCreditCard">
        <p className="puntos">····</p>
        <p className="puntos">····</p>
        <p className="puntos">····</p>
        <p>{props.number.slice(-5, -1)}</p>
      </div>
      <div className="dateCreditCard">
        <p>Expires</p>
        <p>
          {props.expirationMonth.toString().padStart(2, "0")}/
          {props.expirationYear.toString().slice(2, 4)}
        </p>
        <p>
          <span>{props.bank}</span>
        </p>
      </div>
      <p className="nameCreditCard">{props.owner}</p>
    </div>
  );
};
