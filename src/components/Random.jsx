import React from 'react'

function Random() {
    const randomNumber=Math.floor(Math.random()*100)
  return (
    <div>
      Random number={randomNumber}
    </div>
  )
}

export default Random
