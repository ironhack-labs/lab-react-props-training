function CreditCard(props) {

  let hiddenCardNum = `•••• •••• •••• ` + props.number.slice(-4)

  let month = props.expirationMonth < 10 ? `0${props.expirationMonth}` : props.expirationMonth;
  return (
    <div className="credit-card" style={{backgroundColor: props.bgColor, color: props.color}}>
      <p className="card-number">{hiddenCardNum}</p>
      <div className="card-row">
    <p>Expires {month}/{String(props.expirationYear).slice(-2)}</p>
      <p>{props.bank}</p>
      </div>
      <p className="card-owner">{props.owner}</p>
    </div>
  )
}
export default CreditCard