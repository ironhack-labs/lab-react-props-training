import "./CreditCard.css";

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const logo = type.toLowerCase() === 'visa' ?
    'https://media.licdn.com/dms/image/C4D12AQHlVmYMucjSIA/article-cover_image-shrink_720_1280/0/1628177193073?e=2147483647&v=beta&t=peBfQFzZfheBlCxcnCmkAm4N_uYK5nSd7cPf7OdaGo8'
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png';
    return (
        <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
            <img src={logo}className="logo" alt="logo" />
            <p className="number">🞄🞄🞄🞄 🞄🞄🞄🞄 🞄🞄🞄🞄 {number.slice(-4)}</p>
            <div className="card-text-container">
                <div className="first-row">
                    <p className="expiration"> Expires {expirationMonth}/{expirationYear} </p>
                    <p className="bank"> {bank} </p>
                </div>
                <div className="second-row">
                    <p className="owner"> {owner} </p>
                </div>
            </div>     
        </div>
    );
}

export default CreditCard;