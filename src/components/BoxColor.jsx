import React from 'react'

const BoxColor = (props) => {
  const bg = `rgb(${props.r}, ${props.g}, ${props.b})`;
  return (
    <div>
        <p style={{backgroundColor:bg,textAlign:"center",padding:"20px"}}>rgb({props.r},{props.g},{props.b})</p>
    </div>
  )
}

export default BoxColor