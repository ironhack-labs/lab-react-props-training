function CreditCard(props) {

  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
  const lastFourDigits = number.slice(-4)
  const cardType = type === "Visa" ? "../src/assets/images/visa.png" : "../src/assets/images/master-card.svg"

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
      <div className="card-type">
        <img src={`/images/${cardType}`} style={{ width: 50 }} />
      </div>
      <div className="card-number">•••• •••• •••• {lastFourDigits}</div>
      <div className="card-info">
        {/* expirationYear % 100 // modulus operator used to extract the last 2 digits of the given year*/}
        <div>Expires {expirationMonth}/{expirationYear % 100} {bank}</div>
        <div>{owner}</div>
      </div>
    </div>
  )
}

export default CreditCard