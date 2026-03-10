import "./CreditCard.css";
import visaImg from '../assets/images/visa.png';
import masterCardImg from '../assets/images/master-card.svg';

function CreditCard({type, number,expirationMonth,expirationYear,bank,owner, bgColor, color}) {

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const formattedNumber = `•••• •••• •••• ${number.slice(-4)}`;


  return (
    <div className="card" style={cardStyle}>
      <div className="logo">
        <img src={type === "Visa" ? visaImg : masterCardImg} alt="" />
      </div>

      <p className="card-number">{formattedNumber}</p>
      
      <div className="card-data">
        <p>
          Expires{expirationMonth}/{expirationYear} <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
