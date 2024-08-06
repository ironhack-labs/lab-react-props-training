export function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
      };
    
    const lastFourDigits = number.slice(-4);
    
    return (
        <div className="credit-card" style={cardStyle}>
            <div className="card-type">{type}</div>
            <div className="card-number">**** **** **** {lastFourDigits}</div>
            <div className="card-expiration">
                Expires {expirationMonth}/{expirationYear}       {bank}
            </div>
            <div className="card-owner">{owner}</div>
        </div>
    );
}