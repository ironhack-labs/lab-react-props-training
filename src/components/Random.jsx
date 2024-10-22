import React from 'react'

export default function Random(props) {

    let valor =  Math.floor(Math.random() * props.max + props.min)
  return (
    <div className='tarjeta'>
      <p>random value between {props.min} and {props.max} {"=>"} {valor} </p>
    </div>
  )
}
