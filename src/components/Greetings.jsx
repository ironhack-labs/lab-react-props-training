
function Greetings(props) {
  return (
    <div>
        <p>{props.lang === 'de'? <span>Hallo</span>: props.lang === 'fr'? <span>Bonjour</span>:null} {props.children}</p>
    </div>
  )
}

export default Greetings