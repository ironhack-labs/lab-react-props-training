import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/master-card.svg";

const CreditCard = (props) => {
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

  const maskedNumber = "•••• •••• •••• " + number.slice(-4);

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-type">
        <img
          src={type === "Visa" ? visa : mastercard}
          alt={type}
          style={{ width: "50px" }}
        />
      </div>
      <div className="card-number">{maskedNumber}</div>
      <div className="card-details">
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span>{bank}</span>
        <span className="card-owner">{owner}</span>
      </div>
    </div>
  );
};
export default CreditCard;
