import React from 'react'

function IdCard(props) {
  console.log(props)
  return (
  <div className = "container">

<div id= "imagen">
<img src={props.picture} alt="" />
</div>
  
  <div id= "listado">
 <ul>
    <p><strong>Last Name: </strong>{props.lastName}</p>
    <p><strong>First Name: </strong>{props.firstName}</p>
    <p><strong>Gender: </strong>{props.gender}</p>
    <p><strong> Height: </strong>{props.height}</p>
    <p><strong>Date of Birth: </strong> {props.birth.toDateString()}</p>

  </ul>

  </div>
 
  </div>
  



)
}

export default IdCard