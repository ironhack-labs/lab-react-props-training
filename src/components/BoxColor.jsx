import React from 'react'

function BoxColor(props) {
  return (
    <div style={{textAlign: 'center', maxWidth: "500px", border: "2px solid black", margin: "5px", backgroundColor: `rgb(${props.r},${props.g},${props.b})`, color: props.r === 255 ? "white": "black" }}>
        <p>rgb({props.r},{props.g},{props.b})</p>
    </div>
  )
}

export default BoxColor