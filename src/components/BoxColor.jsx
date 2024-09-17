import React from 'react'



export default function BoxColor(props) {

    let color= `rgb(${props.r}, ${props.g}, ${props.b})`

  return (
    <div className='contenedor' style={{backgroundColor:color}}>

        <p  style={{textAlign:'center', width: '100%'}} >rgb({props.r}, {props.g}, {props.b})</p>

      
    </div>
  )
}


