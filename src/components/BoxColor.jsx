import React from 'react'

function BoxColor(props) {
    const color = `rgb(${props.r} ,${props.g} ,${props.b})`
    function rgbToHex() {
        return "#" + (1 << 24 | props.r << 16 | props.g << 8 | props.b).toString(16).slice(1);
      }
  return (
    <div style={{backgroundColor:color, height:"200px", width:"200px"}}>
        <p>RGB: {props.r} {props.g} {props.b}</p>
        <p>Hex: {rgbToHex()}</p>
    </div>
  )
}

export default BoxColor