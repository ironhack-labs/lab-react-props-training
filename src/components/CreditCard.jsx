import VisaImg from "../assets/images/visa.png";
import MastercardImg from "../assets/images/master-card.svg";

function CreditCard(props) {

  const cardStyle = { backgroundColor: props.bgColor, color: props.color};

  let cardTypeImg;
  if (props.type === "Visa") {
    cardTypeImg = VisaImg
  } else if (props.type === "Master Card") {
    cardTypeImg = MastercardImg
  }

  return (
    <div className="credit-card" style={cardStyle}>
      <img src={cardTypeImg} alt="Type" />

      <div className="card-text">
        <h1>{props.number}</h1>

        <p>
          Expires {props.expirationMonth}/{props.expirationYear}&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}
          <br></br>{props.owner}
        </p>
      </div>
    </div>
  )
}

export default CreditCard