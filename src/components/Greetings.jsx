import React from 'react'

function Greetings(props) {

    function Saludo (){
        if (props.lang === "de"){
            return `Hallo ${props.children}`
        } else if (props.lang === "en"){
            return `Hi ${props.children}`
        } else if (props.lang === "es"){
            return `Hola ${props.children}`
        }else if (props.lang === "fr"){
            return `Bonjour ${props.children}`
        }
    }



  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h4>{Saludo()}</h4>
    </div>
  )
}

export default Greetings