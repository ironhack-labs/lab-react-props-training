
function CreditCard(props) {

  let ocultNumbers = "**** **** **** " + props.number.slice(-4)
  
  let month = props.expirationMonth.toString().padStart(2, "0")
  
  return (
    <div className="card" style={{flexDirection: "column", backgroundColor: `${props.bgColor}`, color: `${props.color}`, width: "250px", borderRadius: "10px"}}>
      <span>{props.type}</span>
      <span>{ocultNumbers}</span>
      <span>Expires {month}/{props.expirationYear}</span>
      <span>{props.owner}</span>
    </div>
  )
}

export default CreditCard