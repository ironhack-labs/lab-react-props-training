import "./CreditCard.css";
import Visa from "../../assets/images/visa.png";
import MasterCard from "../../assets/images/master-card.svg";

const CreditCard = (props) => {
  const cardStyle = {
    color: `${props.color}`,
    backgroundColor: `${props.bgColor}`,
  };
  const cardImage = props.type === "Visa" ? Visa : MasterCard;
  return (
    <div className="CreditCard" style={cardStyle}>
      <div className="Logo">
        <img src={cardImage} alt="credit card logo" />
      </div>
      <div className="CardNumber">•••• •••• •••• {props.number.slice(-4)}</div>
      <div className="PersonInfo">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
