import React from 'react'

const Random = (props) => {
  const rand =Math.floor(Math.random()*props.max)+1
  return (
    <div className='random'>
        <p> Random value between{props.min} and {props.max} : {rand}</p>
    </div>
  )
}

export default Random