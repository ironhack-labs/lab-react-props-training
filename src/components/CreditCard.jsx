import React from 'react'

function CreditCard(props) {
const color = props.color
const bgcolor = props.bgColor
  return (
    <div style={{backgroundColor :{bgcolor}, color:{color}}}>
        {props.type === "Visa"? <img src="./assets\images/visa.png"></img>:<img src="./assets/visa.png"></img>}
        <p>.... .... ....{props.number}</p>
        <p>Expiration: {props.expirationMonth}/{props.expirationYear} </p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard