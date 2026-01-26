import React from 'react'




const Random = (props) => {
  let numRandom = 0
  numRandom = Math.ceil(Math.random()*(props.max-props.min+1)+props.min)
  return (
    <div className="container">
      <p>
      Random value between {props.min} and {props.max} {"=>"} {numRandom}
      </p>
      
    </div>
  )
}

export default Random