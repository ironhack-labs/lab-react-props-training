import visa from './../assets/images/visa.png';
import masterCard from './../assets/images/master-card.svg';

export const CreditCard = (props) => {
    const { expirationYear, expirationMonth, number, type } = props;

    const masked = number
        .slice(0, -4)
        .replace(/\d/g, '•') + number.slice(-4);

    const grouped = masked.replace(/(.{4})/g, '$1 ').trim();

    const formattedDate = `${expirationMonth.toString().padStart(2, '0')}/${expirationYear.toString().slice(-2)}`;

    const cardType = type === 'Visa' ? visa : masterCard;

    return (
        <div className="credit-card" style={{ backgroundColor: props.bgColor, color: props.color }}>
            <img className="card-type" src={cardType} alt={type} />
            <div className="card-number">{grouped}</div>
            <div className="credit-card-info">
                <span className="expiration">Expires {formattedDate}</span>
                <span className="bank-name">{props.bank}</span>
            </div>
            <div className="owner-name">{props.owner}</div>
        </div>
    );
};