import React from 'react'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  let creditBack = {backgroundColor: {bgColor}}
  let crediColor = {color: {color}}
  
  return (
    <div className='creditCard'>
      <p className='type'>{type}</p>
      <p className='number'>{number}</p>
      <p className='expiration'>Expires {expirationMonth}/{expirationYear}   {bank}</p>
      <p className='owner'>{owner}</p>
      <p style={creditBack}></p>
      <p style={crediColor}></p>
    </div>
  )
}
