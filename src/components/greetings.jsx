import React from 'react'

function greetings(props) {
    function greet(){
        if(props.lang === "es"){
            return "Hola"
        }else if(props.lang ==="en"){
            return "Hello"
        }else if(props.lang ==="de"){
            return "Hallo"
        }else if(props.lang ==="fr"){
            return "Bonjour"
        }
    }
  return (
    <div>
        <p>{`${greet()} ${props.children}`}</p>
    </div>
  )
}

export default greetings