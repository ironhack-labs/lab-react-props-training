function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner,
    bgColor, color
}) {
    const typeImages = {
        "Visa": "../../public/visa.png",
        "Master Card": "../../public/master-card.svg"
    }

    return (
        <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
            <img src={typeImages[type]} alt="credit card logo" style={{alignSelf: "end", width: "70px"}}/>
            <h2>•••• •••• •••• {number.slice(12)}</h2>
            <div style={{alignSelf: "start", display:"flex", flexDirection: "column",
                 justifyContent:"end", gap:0}}>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;