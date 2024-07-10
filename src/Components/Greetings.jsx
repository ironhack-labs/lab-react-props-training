

function Greetings(props) {

function saludar (){
if(props.lang === "en"){
return `Hello ${props.children}`

}else if(props.lang === "de"){
return `Hallo ${props.children}`
}
else if(props.lang === "fr"){
    return `Bonjuor ${props.children}`  
}
else if(props.lang === "es"){
    return `Hola ${props.children}`  
}
}

  return (



    <div>
      <h3>{saludar()}</h3>  

    </div>
  )
}

export default Greetings