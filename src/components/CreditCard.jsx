export const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const containerStyle = {
    display: "flex", // This makes the cards appear in a row
    justifyContent: "center", // Space between cards
    gap: "20px", // Optional: Space between each card
  };

  const divStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: "15px",
    padding: "20px",
    width: "300px",
    height: "180px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div className="card-container" style={containerStyle}>
      <div className="card" style={divStyle}>
        <div
          className="card-logo"
          style={{ position: "absolute", top: "15px", right: "20px" }}
        >
          {type === "Visa" ? (
            <img
              src="../assets/images/visa.png"
              alt="Visa"
              style={{ width: "60px" }}
            />
          ) : type === "Mastercard" ? (
            <img
              src="../assets/images/master-card.svg"
              alt="Mastercard"
              style={{ width: "60px" }}
            />
          ) : null}
        </div>
        <div
          className="card-number"
          style={{ fontSize: "1.5rem", marginBottom: "10px" }}
        >
          •••• •••• •••• {number.slice(-4)}
        </div>
        <div className="card-expiry" style={{ fontSize: "0.9rem" }}>
          Expires {expirationMonth}/{expirationYear}
        </div>
        <div className="card-holder" style={{ fontSize: "0.9rem" }}>
          {owner}
        </div>
        <div className="card-bank" style={{ fontSize: "0.9rem" }}>
          {bank}
        </div>
      </div>
    </div>
  );
};
