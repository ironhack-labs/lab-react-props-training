import visa from "../assets/images/visa.png";
import masterCard from "../assets/images/master-card.svg";

function CreditCard(props) {
  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: "300px",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardLogo = props.type === "Visa" ? visa : masterCard;

  return (
    <div style={cardStyle}>
      <p>{cardLogo}</p>
      <p>{props.number}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
