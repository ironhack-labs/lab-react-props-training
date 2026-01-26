import React from 'react'

function BoxColor(props) {
  const boxColorStyles  ={
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color:"white",
    width:"90vw",
    height: "200px",
    display:"flex",
    justifyContent:"center",
    

  }
  return (
    <div style={boxColorStyles}>
      {props.children}
     
    </div>
  )
}

export default BoxColor

