import React from 'react'

export default function IdCard(props) {
  return (
    <div>
        <img src={props.picture} alt="" />
        <div>
            <p><span>lastName=</span> {props.lastName}</p>
            <p><span>firstName= </span>{props.firstName}</p>
            <p><span>gender=</span>{props.gender}</p>
            <p><span>height=</span>{props.height}</p>
            <p><span>birth=</span>{props.birth.toLocaleDateString()}</p>
        </div>
    </div>
  )
}
