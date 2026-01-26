import React from "react"

function Random (props){
    const aleatorio = Math.floor( Math.random() + (props.max - props.min +1) + props.min);

    return ( 
        <div id= "greetings">
            Random value between {props.min} and {props.max} = {aleatorio};
        
        
        </div>
        
    )
}

export default Random