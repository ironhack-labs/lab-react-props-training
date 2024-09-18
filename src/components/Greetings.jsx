import React from 'react'



let greet = "";


function Greetings(props) {
  if(props.lang === "de"){
    greet = `Hallo ${props.children}`
  } else if (props.lang === "es"){
    greet = `Hola ${props.children}`
  } else if (props.lang === "en"){
    greet = `Hello ${props.children}`
  } else if (props.lang === "fr"){
    greet = `Bonjour ${props.children}`
  } 
  return (
    <div className="container">
      {greet}
    </div>
  );
}

export default Greetings