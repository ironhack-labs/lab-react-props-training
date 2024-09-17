import React from 'react'

function BoxColor(props) {
 const backgroundColorBox= `rgb (${props.r}, ${props.g}, ${props.b})`;

  const boxStyle= {
    backgroundColor: {backgroundColorBox},
    border: "2px solid black",
    padding: "10px",
    margin:"10px",
  }
  return (
    <div>
        <p style={boxStyle}> rgb ({props.r}, {props.g}, {props.b}) </p>

    </div>
  )
}

export default BoxColor