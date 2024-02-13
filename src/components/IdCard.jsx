import React from 'react'

function IdCard(props) {

  let spanStyle = {
    fontWeight: "bold",
  }
  
  
    return (
    <div>
      <img src={props.image} alt={props.firstName}/>
      <p><span style={spanStyle}>First Name: </span>{props.firstName}</p>
      <p><span style={spanStyle}>Last Name: </span>{props.lastName}</p>
      <p><span style={spanStyle}>Gender: </span>{props.gender}</p>
      <p><span style={spanStyle}>Height: </span>{props.height}</p>
      <p><span style={spanStyle}>Birth: </span>{props.birth.toDateString()}</p>
      
       
    </div>
  )
}

export default IdCard