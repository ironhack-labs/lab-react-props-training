import React from 'react'

function Greetings(props) {
    
  return (
    <div id="greetings">
    {props.lang === "de" && <p>Hallo <span>{props.children}</span></p>}
    {props.lang === "en" && <p>Hello <span>{props.children}</span></p>}
    {props.lang === "fr" && <p>Bonjour <span>{props.children}</span></p>}
    {props.lang === "es" && <p>Hola <span>{props.children}</span></p>}
    </div>
  )
}

export default Greetings