import React from 'react'

export default function Greetings(props) {
    let massage;
    if(props.lang === "de"){
        massage = "hallo"
    }else if(props.lang === "fr"){
        massage = "bonjour"
    }
  return (
    <div>
        <p> {massage} {props.children}</p>
    </div>
  )
}
