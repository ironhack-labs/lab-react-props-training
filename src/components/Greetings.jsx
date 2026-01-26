
function Greetings(props) {
  return (
    <div>
        {props.lang === "de" ? <span>Hallo {props.children}</span> : <span>Bounjour {props.children}</span>}

    </div>
  )
}

export default Greetings