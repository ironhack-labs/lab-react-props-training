const CreditCard = (props) => {
  const creditCardStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    margin: "20px",
    padding: "40px",
    height: "200px",
    width: "400px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div style={creditCardStyle}>
      <h1 style={{ textAlign: "right" }}>{props.type}</h1>
      <h1 style={{ textAlign: "center" }}>
        **** **** **** {props.number.slice(-4)}
      </h1>
      <div style={{ textAlign: "left", fontSize: "1.2rem" }}>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
