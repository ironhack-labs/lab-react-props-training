import React from 'react'

const Random = ({ min, max }) => {
    
  if (typeof min !== 'number' || typeof max !== 'number' || min >= max) {
    return <div>Error: min debe ser menor que max y ambos deben ser números.</div>;
  }

  // Generar un número aleatorio entre min y max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      Random value between {min} and {max} = {randomNumber}
    </div>
  )
}

export default Random