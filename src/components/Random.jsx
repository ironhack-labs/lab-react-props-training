import React from 'react'

export default function Random({min, max}) {
  const randomNumber = Math.floor(Math.random()*100)
  const number = (min <= randomNumber && randomNumber <= max) ? randomNumber : null
  return (
    <div className='numeros'>
      <p>
        {number!==null ? `Random value between ${min} and ${max} = ${number}`: null}
      </p>

    </div>
  )
}


