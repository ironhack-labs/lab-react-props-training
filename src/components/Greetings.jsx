import React from 'react'

function Greetings() {
  return (
    <div>
        <h1 className='idioma'>
            {eachIdioma === "de" ? "Ludwig" : "François"}
        </h1>
    </div>
  )
}

export default Greetings