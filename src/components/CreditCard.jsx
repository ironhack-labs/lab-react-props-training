function CreditCard (props) {

    //{type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}

    return (
        <div className="credit-card">
            <p className="card-type">{`${props.card.type}`}</p>
            <h2>{`${props.card.number}`}</h2>
            <h4>Expires {`${props.card.expirationMonth}/${props.card.expirationYear}`}</h4>
            <h4>{`${props.card.bank}`}</h4>
            <h4>{`${props.card.owner}`}</h4>

        </div>
    )

}

export default CreditCard;