import React from 'react'

function Greetings(props) {
  return (
    <div>
        lang={props.lang}
        {props.children}
        
        
    </div>
  )
}

export default Greetings