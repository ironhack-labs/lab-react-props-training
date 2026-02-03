import React from 'react'
import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'
const CreditCard = (props) => {
  let image;
  if(props.type==="Master Card"){
     image = masterCard
  }else{
     image = visa
  }
  return (
    <div className='credit-card'>
        <div>
           <img src={image} alt={props.type} style={{width:"30px", height:"30px", marginLeft:"250px"}}/>
           <p style={{textAlign:"center",fontSize:"20px"}}>{props.number}</p>
        </div>
       
        <div style={{display:"flex", gap:"10px"}}>
           <p> Expires {props.expirationMonth}/{props.expirationYear}</p>
           <p>{props.bank}</p>
        </div>
       <div> <p>{props.owner}</p></div>
      
    </div>
  )
}

export default CreditCard