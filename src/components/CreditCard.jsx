function CreditCard({ type, number, expirationMonth, expirtaionYear, bank, owner, bgColor, color }) {
    return (
        <div style={{ backgroundColor: bgColor, color: color, padding: "20px", margin: "10px" }}>
            <p>{type}</p>
            <p>{number}</p>
            <p>Expires {expirationMonth}/{expirtaionYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    );
}

export default CreditCard;