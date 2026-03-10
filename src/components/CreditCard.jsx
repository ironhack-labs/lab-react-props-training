import imageVisa from "../assets/images/visa.png"
import imageMasterCard from "../assets/images/master-card.svg"


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    const style = { border: "1px solid black",
                    width: "420px",
                    height: "250px",
                    backgroundColor: bgColor,
                    borderRadius: "20px",
                    color: color,
                    margin: " 20px 20px 20px 0 ",
                    padding: "20px"

    } 

    return (
        <div style={style}>
            <div style={{display:"flex", justifyContent:"flex-end"}}>
            {type === "Visa"? 
             <img src={imageVisa} style={{width:"110px", height:"40px"}}/>:
             <img src={imageMasterCard} style={{width:"80px", height:"40px"}}/>}
             </div>
             <div>
            <p style={{fontSize: "2.5rem"}}>{number.match(/.{1,4}/g).join(" ")}</p>
            <span>Expires: {String(expirationMonth).padStart(2, "0")}/{expirationYear.toString().slice(-2)}</span> 
            <span style={{paddingLeft:"20px"}}>{bank}</span>
            <p>{owner}</p>
            </div>
        </div>  
    )
}

export default CreditCard