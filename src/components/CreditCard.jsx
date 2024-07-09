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
  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img
        className="cardType"
        src={
          type === "Visa"
            ? "src/assets/images/visa.png"
            : "src/assets/images/master-card.svg"
        }
      />
      <p className="cardNumber">
        {number
          .toString()
          .replace(/^\d{12}/, "•••• •••• •••• ")
          .replace(/(\d{4})/g, "$1 ")}
      </p>
      <div className="cardDetails">
        <div className="cardDetails__top">
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <p className="cardDetails__bottom">{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
