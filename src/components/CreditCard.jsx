
function CreditCard(props) {
  return (
    <div className="creditCard" style={{backgroundColor:`${props.bgColor}`,color:`${props.color}`}}>
    <p>····  ····  ····  {props.number.slice(props.number.length-4)}</p>
    <p>Expires {props.expirationMonth}/{props.expirationYear-2000}    {props.bank}</p>
    <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard