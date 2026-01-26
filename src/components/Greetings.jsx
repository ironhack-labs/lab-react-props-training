import React from 'react'

function Greetings(props) {
  return (
    <div>
        <p className="hallo"> Hallo {props.children}</p>
        <p className="bonjour"> Bonjour {props.children} </p>
    </div>
  )
}

export default Greetings