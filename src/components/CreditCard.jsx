
function CreditCard(props) {
  return (
    <div className="card" style={{flexDirection: "column", backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
      <span>{props.type}</span>
      <span>{props.number}</span>
      <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
      <span>{props.owner}</span>
    </div>
  )
}

export default CreditCard