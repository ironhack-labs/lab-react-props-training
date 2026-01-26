function CreditCard (props){
    
return(
    <>
    <div className="credit-card" style ={{ backgroundColor: `${props.bgColor}` , color : `${props.color}` }}> 

        <h2> {props.type === "Visa" 
        ? <img src="src\assets\images\visa.png" alt="Visa" className="card-logo" /> 
        : <img src="src\assets\images\master-card.svg" alt="MasterCard" className="card-logo" /> } 
        </h2>
    
    <h3 className="card-number"> •••• •••• •••• {props.number.slice(-4)} </h3>
    
    <div className="card-expire">
         <span> Expires {props.expirationMonth.toString().padStart(2, "0")}/{props.expirationYear.toString().slice(-2)}  </span>
    <span> {props.bank}  </span> </div>
    <div className="card-owner"> {props.owner}
        
    </div>
    
    </div>
    
    
    </>
)
}

export default CreditCard;