import React from 'react'

const IdCard = (props) => {
    
  return (
    <div className='card-id'>
        <div style={{display:"block",height:"100%"}}>
            <img src={props.picture}/>
        </div>
        <div style={{paddingBottom:"20px",gap:"1px"}}>
            <p> First name: {props.lastName}</p>
            <p> Last name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toLocaleDateString()}</p>
        </div>
     
    </div>
  )
}

export default IdCard