import visaImage from "../assets/images/visa.png";
import masterCardImage from "../assets/images/mastercard.png";
function CreditCard(props) {
  const maskCreditCard = (num) => "**** **** **** " + num.slice(-4);

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="credit-card-details">
        <h3>
          {props.type === "Visa" ? (
            <img className="visa" src={visaImage} />
          ) : (
            <img className="mastercard" src={masterCardImage} />
          )}
        </h3>
        <h2 className="card-number">{maskCreditCard(props.number)}</h2>
        <p className="expiry-date">
          Expires {props.expirationMonth}/{props.expirationYear}
          <p className="bank-name">{props.bank}</p>
        </p>
        <p className="owner-name">{props.owner}</p>
      </div>
    </div>
  );
}
export default CreditCard;
