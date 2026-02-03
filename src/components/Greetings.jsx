import React from 'react'

const Greetings = (props) => {
  return (
    <div className='greeting'>
       {props.lang==="de" ?<p> Hallo {props.children}</p>:<p> Bonjour {props.children}</p>}
    </div>
  )
}

export default Greetings