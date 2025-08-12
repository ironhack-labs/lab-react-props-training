function Greetings(props) {
    let greetingWord ="";

    switch (props.lang) {
        case "de":
            greetingWord = "Hallo"
            break;
        case "en":
            greetingWord = "Hello"
            break;
        case "es":
            greetingWord = "Hola"
            break;
        case "fr":
            greetingWord = "Bonjour"
            break;
        default:
            greetingWord = "Hallo"
            break;
    }
  return (
    <div className="card">
    <p>{greetingWord} {props.children}</p>    
    </div>
  )
}
export default Greetings