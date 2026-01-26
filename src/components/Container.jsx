import React from 'react'

function Container(props) {
    
return(
    <div id="greetings">
        {props.lang==="de"&& <p>Hallo<span>{props.children}</span></p>} 
        {props.lang==="en"&& <p>Hello<span>{props.children}</span></p>}
        {props.lang==="fr"&& <p>Bon jour<span>{props.children}</span></p>}
        {props.lang==="es"&& <p>Hola<span>{props.children}</span></p>}
        </div>
)
}

export default Container
