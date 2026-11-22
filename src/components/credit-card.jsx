function CreditCard (props) {
    const devStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let lastDigits = ""

    for (let i = 0; i < props.number.length; i++) {
        if (i >= props.number.length - 4) {
            lastDigits += props.number[i]
    }   }

    let secretNumber = `•••• •••• •••• ${lastDigits}`
    
    let source = ""
    if (props.type === "Visa") {
        source = "./src/assets/images/visa.png"
    } else if (props.type === "Master Card") {
        source = "./src/assets/images/master-card.svg"
    }


    return <div style={devStyle} className="target">
        <img className="type" src = {source} />
        <div className="secretNumber"> {secretNumber}</div>
        <div className="info">
            <div className="expires"> Expires {props.expirationMonth}/{props.expirationYear} </div>
            <div className="bank"> {props.bank} </div>
        </div>
        <div className="owner"> {props.owner} </div>
      </div>
}

export default CreditCard