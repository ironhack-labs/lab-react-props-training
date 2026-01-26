import React from 'react'

function Greetings(prop) {

let language;
  
if (prop.lang === "es"){
    language = `Hola`   
  }else if(prop.lang === "en"){
    language =  `Hello`
  }else if (prop.lang ==="de"){
    language = `Hallo`
  }else if (prop.lang === "fr"){
    language = `Bonjour `
  }


  return (
    <div>
      <p>{`${language} ${prop.children}`}</p>
      
    </div>

  )
}

export default Greetings