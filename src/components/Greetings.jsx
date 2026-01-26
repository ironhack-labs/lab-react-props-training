function Greetings(props) {
  let greeting;

  switch (props.lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
      break;
    default:
      greeting = "Hello";
  }
  return (
    <div className="greet">
      {greeting} {props.children}
    </div>
  );
}
export default Greetings;
