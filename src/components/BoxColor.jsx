import React from 'react'

function BoxColor(props) {
    const bgcolor ={backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}
  return (
    <div id="colorbox" style={bgcolor}>
        <p>rgb({props.r},{props.g},{props.b} )</p>
    </div>
  )
}

export default BoxColor