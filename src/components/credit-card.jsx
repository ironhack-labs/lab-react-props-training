import "./credit-card.css";

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
   
const cardLogo = {
    "Visa" : "https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png",
    "Master Card" : "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/3840px-Mastercard-logo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
};

const formatedMonth = String(expirationMonth).padStart(2,"0");

const formatedYear = String(expirationYear).slice(-2);

const maskedNumbers = `•••• •••• •••• ${number.slice(-4)}`

    return (
        <div className = "credit-card" style = {{backgroundColor : bgColor}}>
            
            <img className= "card-logo" src= {cardLogo[type]} alt="" />

            <p className= "card-number" style = {{color : `${color}`}}>{maskedNumbers}</p>
            
            <div className= "card-info" style = {{color : `${color}`}}>
                <p>Expires {formatedMonth}/{formatedYear}</p>
                <p>{bank}</p>
            </div>

            <p className= "card-owner" style = {{color : `${color}`}}>{owner}</p>
        </div>

    )
}

export default CreditCard