function Greetings(props) {

    function saludo(){
if(props.lang === "de"){
    return ` Hallo ${props.children} `
}else if(props.lang === "en"){
    return ` Hello ${props.children} `
}else if(props.lang === "es"){
    return ` Hola ${props.children} `
}else if(props.lang === "fr"){
    return ` Bonjour ${props.children} `
}
}

  return (
    
    <div key={props.children}>
<h4>{saludo()}</h4>


    </div>


  )
}

export default Greetings