import masterCard from '../assets/images/master-card.svg';
import visa from '../assets/images/visa.png';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const logo = type === 'Visa' ? visa : masterCard;

  return (
    <article className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <div className="credit-card__top">
        <span>{bank}</span>
        <img src={logo} alt={type} />
      </div>
      <p className="credit-card__number">•••• •••• •••• {number.slice(-4)}</p>
      <div className="credit-card__bottom">
        <span>{owner}</span>
        <span>{String(expirationMonth).padStart(2, '0')}/{expirationYear}</span>
      </div>
    </article>
  );
}

export default CreditCard;
