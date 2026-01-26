import React from 'react'

function IdCard(props) {
  return (
    <div id='idCard'>
        <p>last Name: <span>{props.lastName}</span></p>
        <p>First name: <span>{props.firstName}</span></p>
        <p>Gender: <span>{props.gender}</span></p>
        <p>Height <span>{props.height}</span></p>
        <p>Birth: <span>{props.birth}</span></p>
        <img src={props.picture} alt="picture" /> 
    </div>
  )
}

export default IdCard