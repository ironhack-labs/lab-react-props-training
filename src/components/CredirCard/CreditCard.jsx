import "./CreditCard.css"
import visaLogo from '../../assets/images/visa.png';
import mastercardLogo from '../../assets/images/master-card.svg';

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    
    const formattedYear = expirationYear.toString().slice(-2);
    const formattedNumber = number.slice(-4);
    
    const cardStyle = {
        backgroundColor: bgColor,
    }

    const textStyle = {
        color: color,
    }

    let logoSrc;
        switch (type) {
            case 'Visa':
            logoSrc = visaLogo;  
            break;
            case 'Master Card':
            logoSrc = mastercardLogo;  
            break;
        }

    return (
        <div className="card" style={cardStyle}>
            <div className="logo">
                <img src={logoSrc} alt="logo"></img>
            </div>
            <p className="card-number" style={textStyle}>•••• •••• •••• {formattedNumber}</p>
            <div className="card-info" >
                <div className="text">
                <p style={textStyle}>Expires {expirationMonth}/{formattedYear}</p>
                <p style={textStyle}>{bank}</p>
                </div>
                <p style={textStyle}>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;