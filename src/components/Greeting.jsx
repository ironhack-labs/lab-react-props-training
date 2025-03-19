function Greeting(props) {
  let saludo = " "

  if(props.lang === "de"){
    saludo = "Hallo"
  } else if(props.lang === "fr"){
    saludo = "Bonjour"
  }else if(props.lang === "en"){
    saludo = "Hello"
  }else if (props.lang === "es"){
    saludo = "Hola"
  }
  return (
    <div style={{display: "flex", alignContent:"center", padding: "10px", borderStyle: "solid", borderWidth: "3px" , marginBottom: "5px", fontSize: "2rem"}}>
    <p>{saludo} {props.children}</p>
    
    </div>
  )
}

export default Greeting;
