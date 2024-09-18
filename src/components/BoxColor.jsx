import React from 'react'



const BoxColor = (props) => {
  
   
  
    const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`
  
    const style = {
      backgroundColor: backgroundColor, 
      color: "white",
      textAlign: "center"
    }

      return (
    
    <div className='container' style={style}>
      rgb({props.r}, {props.g}, {props.b})
    </div>

  )
}

export default BoxColor