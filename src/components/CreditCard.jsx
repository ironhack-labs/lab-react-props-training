import visa from "../assets/images/visa.png"
import masterCard from "../assets/images/master-card.png"

function CreditCard(props) {
    let imgSrc;
    if (props.type === "Visa") {
        imgSrc = visa;
    }
    else if (props.type === "Master Card") {
        imgSrc = masterCard;
    }

    return (
        <div class="card-box" style={{backgroundColor: props.bgColor}}>
            <img src={imgSrc} alt={props.type} class="cc-img"/>
            <div style={{color: props.color}}>
                <p class="cc-num">•••• •••• •••• {props.number.slice(-4)}</p>
                <p class="cc-info">Expires: {props.expirationMonth}/{props.expirationYear} &nbsp;&nbsp; {props.bank}<br/>
                {props.owner}</p>
            </div>
        </div>
    )

}

export default CreditCard;