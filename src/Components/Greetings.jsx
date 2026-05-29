import React from 'react'

function Greetings(props) {
  const greetings = {
    de: 'Hallo',
    fr: 'Bonjour',
    en: 'Hello',
  }

  return (
    <div>
      <h2>{greetings[props.lang]}, {props.children}!</h2>
    </div>
  )
}

export default Greetings