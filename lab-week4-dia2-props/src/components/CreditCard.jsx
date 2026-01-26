function CreditCard(props) {

    const styleCreditCard = {
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: "10px"
    }

    let expDate = new Date(props.expirationYear, (props.expirationMonth-1))
    const options = {
        year: "2-digit",
        month: "2-digit",
      };

    // console.log(props.expirationMonth-1);
    return(
        <div className="creditCard" style={styleCreditCard}>
            <img src={props.type === "Visa"? "./src/assets/images/visa.png" : "./src/assets/images/master-card.svg"} alt="bank logo" />
            <h2>{
                /* number codified */
                "●".repeat(4) + " " + "●".repeat(4) + " " + "●".repeat(4) + " " + props.number.slice(props.number.length-4)
            }</h2>
            <div id="exp-bank">
                <p>{`Expires: ${expDate.toLocaleString(undefined, options)}`}</p>
                <p>{props.bank}</p>
            </div>

            <p>{props.owner}</p>
            
        </div>
    );
}

export default CreditCard;