import React from "react";
import './Greetings.css'

function Greeting({ lang, name }) {
    let greetingText;
 
   
    if (lang ==="de"){
        greetingText = `Hallo ${name}`
    }
    else if (lang ==="fr"){
        greetingText = `Bonjour ${name}`
    }
    else if (lang ==="en"){
        greetingText = `Hello ${name}`
    }
    else if (lang ==="es"){
        greetingText =  `Hola ${name}`
    }

    return (
        <div className="greeting">
        {greetingText}
 </div>
    )
}

export default Greeting;