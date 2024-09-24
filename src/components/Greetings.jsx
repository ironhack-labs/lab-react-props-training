import React from 'react'

export default function Greetings(props) {
    let saludo = " "
    if(props.lang==="es"){
        saludo="hola"
    }else if (props.lang==="de"){
        saludo = "hallo"
    } else if (props.lang==="en"){
        saludo= "hello"

    }else if (props.lang==="fr")
        saludo="Bonjour"
  return (
    <div className='contenedor'>
    <p>{saludo} {props.children}</p> 
    </div>
  )
}




