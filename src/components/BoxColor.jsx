import React from 'react'

function BoxColor() {

    let r= Math.floor(Math.random() * 256)
    let g= Math.floor(Math.random() * 256)
    let b= Math.floor(Math.random() * 256)

    let estilos= {
        backgroundColor: `rgb(${r},${g},${b})`
    }

  return (
    <div style={estilos}>
      <p>rgb({r}{g}{b})</p>
    </div>
  )
}

export default BoxColor
