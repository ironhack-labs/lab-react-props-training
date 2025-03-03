import visaLogo from "../assets/images/visa.png";
import masterCardLogo from "../assets/images/master-card.svg";

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const background = { backgroundColor: `${bgColor}` };
  const textColor = { color: `${color}` };
  const twoDigitYear = Number(expirationYear.toString().substring(4, 2));

  switch (type) {
    case "Visa":
      return (
        <div className="outerCard" style={background}>
          <div className="logoBank">
            <img src={visaLogo} />
          </div>
          <div className="cardNums">{number}</div>
          <div className="cardInfo">
            <p>
              Expires {expirationMonth}/{twoDigitYear}
            </p>
            <p className="bank">{bank}</p>
          </div>
          <div className="cardOwner">
            <p>{owner}</p>
          </div>
        </div>
      );
      break;
    case "Master Card":
      return (
        <div className="outerCard" style={background}>
          <div className="logoBank">
            <img src={masterCardLogo} />
          </div>
          <div className="cardNums">{number}</div>
          <div className="cardInfo">
            <p>
              Expires {expirationMonth}/{twoDigitYear}
            </p>
            <p className="bank">{bank}</p>
          </div>
          <div className="cardOwner">
            <p>{owner}</p>
          </div>
        </div>
      );
      break;
  }
}
