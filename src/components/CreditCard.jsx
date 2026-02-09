function CreditCard(props) {
  return (
    <div style={{ backgroundColor: props.bgColor, color: props.color, margin: '10px', padding: '10px' }}>
      <p>{props.type}</p>
      {/* Show only last 4 digits */}
      <p>•••• •••• •••• {props.number.slice(-4)}</p>
      <p>Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;