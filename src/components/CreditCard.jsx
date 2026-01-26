import visaIcon from '../assets/images/visa.png';
import masterCardIcon from '../assets/images/master-card.svg';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  
  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

return (
    <div className="credit-card" style={cardStyle}>
        <div className="type">
            <img src={type === "Visa"? visaIcon : masterCardIcon} alt={type} />
            
            </div>
        <div className="number"> {number.replace(/.(?=.{4})/g, '•').replace(/(.{4})/g, '$1 ')} </div>
        <div className="exp-date">
            <p>
                Expires {expirationMonth}/{expirationYear} &nbsp;&nbsp;&nbsp; {bank}
            </p>
            
        
        <p className="owner">{owner}</p> </div>
    </div>
);
};

export default CreditCard;