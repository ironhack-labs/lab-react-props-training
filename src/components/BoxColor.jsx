import React from 'react'
import './BoxColor.css'

export const BoxColor = (props) => {
    const {r, g, b} = props;
  return (
    <div 
        className='box-container'
        style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}
    >
        rgb({r} {g} {b}) <br />
        #ffff0000
    </div>
  )
}
