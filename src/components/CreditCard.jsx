function CreditCard(props) {
  return (
    <div className="credit-card" style={{backgroundColor: props.bgColor}}>CreditCard
      <p className="card-number">{props.number}</p>
      <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  )
}
export default CreditCard