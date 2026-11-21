import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.png";

import "./creditCard.css"

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const styles = {
    backgroundColor: bgColor,
    color: color
  }

  const imgSrc = type === "Visa" ? visa : mastercard

  const lastFour = number.slice(-4)

  const shortYear = expirationYear.toString().slice(-2);

  return (
    <>
      <div className="creditCard" style={styles}>
        <img src={imgSrc} alt={type} className="logo" />
        <span className="num">•••• •••• •••• {lastFour}</span>
        <div className="bankData">
          <span className="expires">Expires {expirationMonth}/{shortYear}</span>
          <span>{bank}</span>
        </div>
        <span>{owner}</span>
      </div>
    </>
  )
}

export default CreditCard