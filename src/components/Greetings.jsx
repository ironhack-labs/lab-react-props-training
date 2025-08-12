function Greetings(props) {
  let greet;
  switch (props.lang) {
    case "de":
      greet = "Hallo";
      break;
    case "es":
      greet = "Hola";
      break;
    case "fr":
      greet = "Bonjour";
      break;
    default:
      greet = "Hello";
  }
  return (
    <div className="container greeting">{greet} {props.children}</div>
  )
}
export default Greetings;