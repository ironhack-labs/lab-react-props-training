import React from "react";

function CreditCard(props) {
  return (
    <div>
      <p>
        <b>type:</b> {props.type}
      </p>
      <p>
        <b>number:</b> {props.number}
      </p>
      <p>
        <b>expiration month:</b>
        {props.expirationMonth}
      </p>
      <p>
        <b>expiration year:</b>
        {props.expirationYear}
      </p>
      <p>
        <b>bank:</b> {props.bank}
      </p>
      <p>
        <b>owner:</b> {props.owner}
      </p>
      <p>
        <b>bgColor:</b>
        {props.bgColor}
      </p>
      <p>
        <b>color:</b> {props.color}
      </p>
    </div>
  );
}

export default CreditCard;
