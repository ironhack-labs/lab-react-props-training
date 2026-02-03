import React from 'react'

export default function Random(props) {
    let resault = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
  return (
    <div>
        <p>random value between {props.min} and {props.max} is {resault}</p>
    </div>
  )
}
