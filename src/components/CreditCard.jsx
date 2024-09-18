
import React from 'react'
import imgVisa from '../assets/images/visa.png'
import imgMaster from '../assets/images/master-card.svg'

const CreditCard = (props) => {
  const styleCredCard = {
    backgroundColor: `${props.bgColor}`,
    padding: "10px"
  }

  const styleImgCard = {
    width: "10%"
    
  }

  let srcCard = props.type === "Visa" ? imgVisa : imgMaster

  return (
    <div className='creditCard' style={styleCredCard}>
      <div>
        <img src={srcCard } alt="" style={styleImgCard} />
      </div>
      <div>
        {props.number}
      </div>
      <div>
        Expires {props.expirationMonth}/{props.expirationYear}
        {props.owner} 
      </div>
    </div>
  )
}

export default CreditCard