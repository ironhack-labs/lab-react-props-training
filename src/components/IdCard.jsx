import React from 'react'

function IdCard(props) {

    const formatDOB = props.birth.toLocaleDateString();
  return (
    <>
    <p><img src={props.picture}/></p>
    <p>Last Name: {props.lastName}</p>
    <p>First Name: {props.firstName}</p>
    <p>Gender: {props.gender}</p>
    <p>height: {props.height}</p>
    <p>birth: {formatDOB}</p>
    </>
  )
}

export default IdCard