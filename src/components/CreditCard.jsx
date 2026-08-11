const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const formatCardNumber = () => {
       return number.slice(-4)
    }

    return (
     <div className="credit-card" style={{backgroundColor: bgColor, color: color }}>
        <p className="card-type"> {type} </p>
        <p className="card-number"> **** **** **** {formatCardNumber()} </p>
        <div className="card-details">
            <span >
                <p> Expires {expirationMonth}/{expirationYear} </p>
                <p> {bank} </p>
            </span>
                <p className="card-owner"> {owner} </p>

        </div>
     </div>
    )
}

export default CreditCard