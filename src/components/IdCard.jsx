import React from 'react'

function IdCard(props) {
  return (
    <div className='descripciones'>
        <img src={props.picture} alt={props.picture} />
        <h2>Fisrt name: <span>{props.firstName}</span></h2>
        <h2>Last name: <span>{props.lastName}</span></h2>
        <h2>Gender: <span>{props.gender}</span></h2>
        <h2>Height: <span>{props.height}</span></h2>
        {/*<h2>birth: {props.birth}</h2>*/}
    </div>
  )
}

export default IdCard