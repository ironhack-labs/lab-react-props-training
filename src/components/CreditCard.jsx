function CreditCard(props){

    // To get the correct logo
    let logoSrc = ""
    if(props.type.toLowerCase() === "visa"){
        logoSrc = "/src/images/visa.png";
    }
    else if(props.type.toLowerCase() === "mastercard"){
        logoSrc = "../images/master-card.svg";
    }

    // Get the card number formated as it should appear
    let visibleDig = props.number.slice(-4)
    let numberCard = "."+"."+"."+"."+ " "+"."+"."+"."+"."+" "+"."+"."+"."+"."+" "+visibleDig
    return (
        <div>
            <div>
                <img src={logoSrc} alt="logo"/>
            </div>
            <p>{numberCard}</p>
        </div>
    )
}

export default CreditCard