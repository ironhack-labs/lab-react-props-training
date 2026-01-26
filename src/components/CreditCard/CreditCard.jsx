import "./CreditCard.css";

// Helper function to only show the last 4 digits of a string:
function showLastFourChars(str) {
  return str
    .toString()
    .split("")
    .map((letter, index) => (index < str.length - 4 ? "*" : letter))
    .join("");
}

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
      <div className="type">
        {type === "Visa" ? (
          <img className="visa" src="/src/assets/images/visa.png" />
        ) : (
          <img
            className="masterCard"
            src="/src/assets/images/master-card.svg"
          />
        )}
      </div>
      <div className="number">{showLastFourChars(number)}</div>
      <div>
        <span className="expirationDate">
          {expirationMonth}/{expirationYear}
        </span><span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
