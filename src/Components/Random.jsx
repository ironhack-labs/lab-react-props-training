import React from 'react'

function Random(props) {

    const random = Math.floor(Math.random() * props.max) + props.min;

  return (
    <div>
        <h2>Random value between {props.min} and {props.max} = {random}</h2>
    </div>
  )
}

export default Random