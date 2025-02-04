import './CreditCard.css';
//  little dots en lieu d'espaces
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
            <div className="credit-card-type">{type}</div>
            <div className="credit-card-number">{number.slice(-4)} </div>
            <div className="credit-card-expiration">{expirationMonth}/{expirationYear}</div>
            <div className="credit-card-bank">{bank}</div>
            <div className="credit-card-owner">{owner}</div>
        </div>
    );
}

export default CreditCard;