import visaImg from "../assets/images/visa.png";
import mastercardImg from "../assets/images/master-card.svg";
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  return (
    <div className="credit-card" style={{ color: color, backgroundColor: bgColor }}>
      <img src={type === "Visa" ? visaImg : mastercardImg} alt={type === "Visa" ? "Visa logo" : "Mastercard logo"} />
      <h2 className="card-number">•••• •••• •••• {number.toString().slice(-4)}</h2>
      <div className="card-info">
        <p className="expiration-date">
          Expires {expirationMonth.toString().padStart(2, "0")}/{expirationYear.toString().slice(-2)} <span className="bank">{bank}</span>
        </p>
        <p className="owner-name">{owner}</p>
      </div>
    </div>
  );
}
export default CreditCard;
