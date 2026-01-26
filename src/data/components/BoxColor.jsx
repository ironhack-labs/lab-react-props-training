import React from 'react'

const BoxColor = ({ r, g, b }) => {

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px', 
    height: '200px', 
    display: 'flex', 
    alignItems: 'center'
   
  }

  // Mostrar el cuadro con el color de fondo y los valores RGB
  return (
    <div style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  )
}

export default BoxColor