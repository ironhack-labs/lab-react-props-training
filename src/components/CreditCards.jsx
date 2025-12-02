function CreditCard(props) {

    const lastDigits = props.number.slice(props.number.length - 4);

    const cardNumber = "**** **** ****" + lastDigits;

    let month = props.expirationMonth;
    if (month < 10) {
        month = "0" + month;
    }

    const shortYear = String(props.expirationYear).slice(2, 4);

    return (
        <div
            className="credit-card"
            style={{
                backgroundColor: props.bgColor,
                color: props.color,
            }}
        >

            <p className="type">{props.type}</p>
            <p className="number">{cardNumber}</p>

            <div className="info">
                <p>
                    Expires {month}/{shortYear} &nbsp;$nbsp; {props.bank}
                </p>
                <p className="owner">{props.owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;