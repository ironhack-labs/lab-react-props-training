
function Greetings(props) {

  let greeting;

  switch (props) {
    case "pt":
        greeting = "Olá";
      break;
    case "de":
      greeting = "Hallo";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Hello";
      break;
  }

  return (
    <div className="greetings">
      <p>{`${greeting}, ${props.children}`}</p>
    </div>
  );
}

export default Greetings;
