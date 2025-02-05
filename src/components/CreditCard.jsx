export default function CreditCard(props){
    const cardImg = props.type === "Visa"
    ? `src/assets/images/visa.png`
    : `src/assets/images/master-card.svg`;

    const cardNum = "•••• •••• •••• "+ (props.number%10000)
    
    const styles={
        backgroundColor: props.bgColor,
        color: props.color
    }
    return(
        <div className="creditCard" style={styles}>
            <img src={cardImg} alt="card logo" />
            <h1>{cardNum}</h1>
            <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}