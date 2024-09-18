
import React from 'react'
import Rating from './Rating'

const licenseImgStyle = {
  width: "200px" 
}

const DriverCard = (props) => {

let picRoute = props.img


  return (
    <div className='license'>
      <div style={licenseImgStyle}>
      <img src={{picRoute}} alt=""/>
      </div>
      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
      
        <p>
          {props.car.model} - {
            props.car.licensePlate
          }
        </p>
      </div>
    </div>
  )
}

export default DriverCard