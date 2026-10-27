function CreditCard(props) {
  const lastFourDigits = props.number.slice(-4);

  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: "12px",
        padding: "20px",
        margin: "10px",
        width: "350px",
      }}
    >
      <h2 style={{ textAlign: "right" }}>{props.type}</h2>

      <h2>•••• •••• •••• {lastFourDigits}</h2>

      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
      </p>

      <p>{props.bank}</p>

      <h3>{props.owner}</h3>
    </div>
  );
}

export default CreditCard;
