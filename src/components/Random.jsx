import React from 'react'

function Random(props) {
    let randomNumber = Math.round(Math.random()*(props.max - props.min))
  return (
    <div id="random"> <p>Random value between {props.min} and {props.max} = {randomNumber} </p></div>
  )
}

export default Random