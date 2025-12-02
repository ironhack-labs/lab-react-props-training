function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  }) {
    const cardType = type === "Visa" ? "💳 Visa" : "💳 Master Card";
    const lastFour = number.slice(-4);
    const formattedMonth = expirationMonth.toString().padStart(2, "0");
  
    return (
      <div
        className="credit-card"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <div style={{ textAlign: "right", fontSize: "1.2rem" }}>{cardType}</div>
        <div style={{ fontSize: "1.5rem", margin: "20px 0" }}>
          •••• •••• •••• {lastFour}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
          <span>Expires {formattedMonth}/{expirationYear % 100}</span>
          <span>{bank}</span>
        </div>
        <div style={{ marginTop: "10px" }}>{owner}</div>
      </div>
    );
  }
  
  export default CreditCard;
  