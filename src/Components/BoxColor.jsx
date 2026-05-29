import React from 'react'

function BoxColor(props) {

    const color = `rgb(${props.r} , ${props.g} , ${props.b})`;

  return (
    <div style={{backgroundColor: color}}>
        <h2>rgb({props.r},{props.g},{props.b})</h2>
    </div>
  )
}

export default BoxColor