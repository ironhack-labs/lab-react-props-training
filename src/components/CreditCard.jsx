import "./CreditCard.css"

function CreditCard (props) {
    const style = {
        backgroundColor: props.bgColor,
        color: props.color,
    }
    return (
        <div className="creditCard" style={style}>
            <ul>
                <li>{props.type}</li>
                <li>**** **** **** **** {props.number.slice(-4)}</li>
                <li>Expires {props.expirationMonth}/{props.expirationYear}</li>
                <li>{props.bank}</li>
                <li>{props.owner}</li>
            </ul>
        </div>
    )
}

export default CreditCard;