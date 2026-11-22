function CreditCard (props) {
    const devStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let secretNumber = ""

    for (let i = 0; i < props.number.length; i++) {
        if ((i < props.number.length - 4 && !(i % 4 === 0)) || i === 0) {
            secretNumber += "•"
        } else if (i < props.number.length - 4 && (i % 4 === 0)) {
            secretNumber += " •"
        } else if (i === props.number.length - 4) {
            secretNumber += ` ${props.number[i]}`
        } else {
            secretNumber += props.number[i]
        }
    }
    
    let source = ""
    if (props.type === "Visa") {
        source = "src/assets/images/visa.png"
    } else if (props.type === "Master Card") {
        source = "src/assets/images/master-card.svg"
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