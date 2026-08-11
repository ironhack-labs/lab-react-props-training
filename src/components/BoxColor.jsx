import React from 'react'

function BoxColor({r, g, b}) {

    let bgColor = `rgb(${r}, ${g}, ${b})`

    // Convert each component to a 2-digit hex string
    const toHex = (c) => c.toString(16).padStart(2, '0');
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;



  return (
    <div style={{ backgroundColor: bgColor }} id='boxcolor'>
        <p>rgb({r},{g},{b})</p>
        <p>{hexColor}</p>

    </div>
  )
}

export default BoxColor