function Greetings(props) {
  let lenguaje = ''
  if (props.lang === 'de') {
    lenguaje = 'Hallo'
  } else if (props.lang === 'en') {
    lenguaje = 'Hello'
  } else if (props.lang === 'es') {
    lenguaje = 'Hola'
  } else if (props.lang === 'fr') {
    lenguaje = 'Bonjour'
  }
  return (
    <div className="container">
      <h1>
        {lenguaje} {props.children}
      </h1>
    </div>
  )
}

export default Greetings
