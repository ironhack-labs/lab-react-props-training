import React from 'react'

function Random(props) {

  let randomNum = Math.floor(Math.random(props.min) * props.max)


  return (
    <div>

      <p>{randomNum}</p>

    </div>
  )
}

export default Random