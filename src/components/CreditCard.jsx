import VisaLogo from "../assets/images/visa.png"
import MCLogo from "../assets/images/master-card.svg"

function CreditCard(props) {
    let image = VisaLogo;

    if (props.type === "Master Card") {
        image = MCLogo
    }

    let cardCode = "•••• •••• •••• " + props.number[12] + props.number[13] + props.number[14] + props.number[15]

    let month = props.expirationMonth;
    if (month < 10) {
        month = "0" + month
    }

    let year = props.expirationYear.toString()[2] + props.expirationYear.toString()[3]

    return(
        <div className="card" style={{backgroundColor: props.bgColor}}>
            <img src={image} alt="ImgType" />
            <h2 style={{color: props.color}}>{cardCode}</h2>
            <p>Expires {month}/{year}<br/>
            {props.owner}</p>
            <p id="bankName">{props.bank}</p>
        </div>
    );
}

export default CreditCard;