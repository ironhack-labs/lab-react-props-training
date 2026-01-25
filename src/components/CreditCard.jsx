import "../App.css";




function CreditCard(props) {

        const cardStyle = {
            backgroundColor: props.bgColor,
            color: props.color
        };
    
        return (
            <div className="creditCard" style={cardStyle}>
                <p className="type">{props.type}</p>
                <p className="hidedNumber">•••• •••• •••• {props.number.slice(-4)}</p>
                <p>Expires {props.expirationMonth}/{props.expirationYear}
                    <span style={{ marginLeft: "30px"}}>
                        {props.bank}
                    </span>
                </p>
                <p style={{ marginTop: "-25px"}}>{props.owner}</p>
                </div>
        );
    }
    
    export default CreditCard;
    