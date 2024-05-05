const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  if (type === "Master Card") {
    const typeArr = type.split(" ");
  }

  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: bgColor,
        color,
        width: "400px",
      }}
    >
      <div className="card-name">
        <h3 className={type === "Visa" ? "visa" : "master-card"}>{type}</h3>
      </div>
      <p className="security-number">
        <span>.... .... ....</span> {number.slice(-4)} <span></span>
      </p>
      <p>
        Expires{" "}
        {expirationMonth.toString().length === 1
          ? "0" + expirationMonth
          : expirationMonth}
        /{expirationYear.toString().slice(-2)} <span>{bank}</span>
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
