import React from 'react'

const cardStyle = {
display: "flex",
alignItems: "flex-start",
fontSize: "12px",
padding: "5px",
border: "1px solid black",
margin: "5px"
}



const IdCard = (props) => {
  return (
    <div className='card' style={cardStyle}>
      <div>
        <img src={props.picture} alt=""  />
      </div>
      <div className='infoCard'>
        <p><strong>First name: </strong>{props.firstName} </p>
        <p><strong>Last name:</strong> {props.lastName} </p>
        <p><strong>Gender:</strong> {props.gender} </p>
        <p><strong>Height:</strong> {props.height} </p>
        <p><strong>Birth:</strong> {props.birth.toDateString()} </p>

      </div>
    </div>
  )

 
}

export default IdCard