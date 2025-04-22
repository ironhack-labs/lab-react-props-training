import VisaLogo from "../assets/images/visa.png";
import MasterCardLogo from "../assets/images/master-card.svg";

const CreditCard = (props) => {
  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  const hiddenNumber = "•••• •••• •••• " + props.number.slice(-4);

  return (
    <div className="bank-card" style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          style={{ height: "20px" }}
          src={props.type === "Visa" ? VisaLogo : MasterCardLogo}
          alt=""
        />
      </div>
      <div
        style={{
          fontSize: "28px",
          margin: "1.5rem 0",
          textAlign: "center",
          letterSpacing: "3px",
        }}
      >
        {hiddenNumber}
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <div>
          {props.expirationMonth}/{props.expirationYear}
        </div>
        <div>{props.bank}</div>
      </div>
      <div>{props.owner}</div>
    </div>
  );
};

export default CreditCard;
