import React from 'react'

export default function BoxColor({r,g,b}) {
  let boxStyle = {backgroundColor: `rgb(${r}, ${g}, ${b})`}
  return (
    <div className='box'>
      <p style={boxStyle}>{`rgb(${r}, ${g}, ${b})`}</p>
    </div>
  )
}
