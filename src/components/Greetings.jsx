function Greetings(props) {
  let languaje = "";

  if(props.lang === "de") {
    languaje = "Hallo"
  } else if(props.lang === "fr") {
    languaje = "Bonjour"
  } else if(props.lang === "en") {
    languaje = "Hello"
  } else if(props.lang === "es") {
    languaje = "Hola"
  }

  return (
    <div className="box">
        <p>{languaje + " " + props.children} </p>
    </div>
  )
}

export default Greetings