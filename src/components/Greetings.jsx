
function Greetings(props) {

  return (
    <p className="container">{props.lang==="de"? "Hallo " : props.lang==="fr" ? "Bonjour " : props.lang==="es"?"Hola ":props.lang==="en"? "Hello " : "" }{props.children}</p>
  )
}

export default Greetings