import React from 'react'

function BoxColor(props) {

 let r= props.r
  let g= props.g
  let b = props.b
  const divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` }

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


  return (
    
    <div style = {divStyle}>
       <h1>{`rgb(${r}, ${g}, ${b})`}</h1>
       <h1>{`Hexadecimal ${rgbToHex}`}</h1>
    </div>
  
 
  )
}

export default BoxColor