import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    const formattedYear = String(expirationYear).slice(-2);

    const maskedNumber = "•••• •••• •••• " + String(number).slice(-4);

    let logo = ""
    
    if (type === "Visa"){
        logo = "src/assets/images/visa.png"
    } else if (type === "Master Card"){
        logo = "src/assets/images/master-card.svg"
    }


  return (
    <div style={{ backgroundColor: bgColor }}  id='creditcard'>
       
        <div id='logo-card-wrapper'>
            <img id='logo-card' src={logo} alt="" />
        </div>

        <div id='card-number-wrapper'>
         <p style={{ fontSize: "24pt" }} >{maskedNumber}</p>   
        </div>
        

        <div id='card-details'>
        <p>Expires {expirationMonth}/{formattedYear}</p>
        <p>{bank}</p>
        </div>

        <p>{owner}</p>

        
    </div>
  )
}

export default CreditCard