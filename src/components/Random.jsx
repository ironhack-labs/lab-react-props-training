import React from 'react'

const Random = ({min, max}) => {
  if (typeof min !== "number" || typeof max !== "number" || min > max) {
    return <p>Invalid props: Please provide valid min and max values.</p>;
  }
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <h2>Random number between {min} and {max} = <strong>{randomNum}</strong></h2>
    </div>
  )
}

export default Random
