
function Greetings(props) {

  console.log(props)

  let saludo = ""
if (props.lang === "de") {
  saludo = "Hallo"
} else if (props.lang === "fr") {
  saludo = "Bonjour"
} else if (props.lang === "es") {
  saludo = "Hola"
} else if (props.lang === "en") {
  saludo = "Hello"
}

  return (
    <div className="card">
      <div>{saludo} {props.children}</div>
    </div>
  )
}

export default Greetings