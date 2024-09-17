import React from 'react'



function IdCard(props) {
  
 
    return (
    <div className="id-card">
        <img src={props.picture} style={{width: "190px", height: "190px"}}/>
        <div className="infoCard"> 
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
        </div>
        
   
    </div>
  )
}

export default IdCard