function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const lastFourDigits = number.substr(number.length - 4);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "5px",
        width: "350px",
        height: "200px",
        margin: "20px",
      }}
    >
      <h2>{type}</h2>
      <p>Number: **** **** **** {lastFourDigits}</p>
      <p>
        Expiration Date: {expirationMonth}/{expirationYear}
      </p>
      <p>Bank: {bank}</p>
      <p>Owner: {owner}</p>
    </div>
  );
}

export default CreditCard;
