function Greetings(props) {
  const greeting =
    props.lang === "de" ? "Hallo" :
    props.lang === "en" ? "Hello" :
    props.lang === "es" ? "Hola" :
    props.lang === "fr" ? "Bonjour":
    "Otro lenguaje"
  
  return (
    <div className="container">
      <p>{greeting} {props.children}</p>
    </div>
  )
}

export default Greetings