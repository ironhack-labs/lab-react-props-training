import React from 'react'

function Greetings({lang, children}) {

    let hello = "";

    if (lang === "de"){
       hello = "Hallo"; 
    } else if (lang === "en"){
       hello = "Hello" 
    } else if (lang === "es"){
        hello = "Hola"
    } else if (lang === "fr"){
       hello = "Bonjour" 
    }
    
  return (
    <div className='box'>
        <p>{hello} {children}</p>
        

    </div>
  )
}

export default Greetings