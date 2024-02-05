import masterCard from "../assets/images/master-card.svg";
import visa from "../assets/images/visa.png";

export default function CreditCard(props) {
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

  const formattedMonth =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  const formattedYear = expirationYear.toString().slice(2);
  const bullet = "•";
  const fourBullets = bullet.repeat(4);

  const formattedNumber =
    fourBullets +
    " " +
    fourBullets +
    " " +
    fourBullets +
    " " +
    number.slice(12);

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div className="Logo">
        <img
          className="BankLogo"
          src={type === "Master Card" ? masterCard : visa}
        />
      </div>
      <div className="Number">{formattedNumber}</div>
      <div className="EndSection">
        <div className="ExpirationBank">
          <p>
            Expires {formattedMonth}/{formattedYear}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
}
