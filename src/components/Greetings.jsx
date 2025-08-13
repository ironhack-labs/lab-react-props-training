function Greetings({lang, children}) {
  let greet;
  switch (lang) {
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
    <div className="container greeting">{greet} {children}</div>
  )
}
export default Greetings;