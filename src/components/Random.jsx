import React from 'react'

function Random(props) {
    function value(){
       return props.min + Math.floor(Math.random()*(props.max - props.min))
    }
  return (
    <div>
        <p>Random value between {props.min} and {props.max} => {value()}</p>
    </div>
  )
}

export default Random