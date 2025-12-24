import './Greeting.css'

function Greetings(props) {
  let returnGreeting = "";
  switch (props.lang) {
    case "es":
      returnGreeting = `Hola ${props.children}`;
      break;
    case "de":
      returnGreeting = `Hallo ${props.children}`;
      break;
    case "fr":
      returnGreeting = `Salut ${props.children}`;
      break;
    case "en":
    default:
      returnGreeting = `Hello ${props.children}`;
      break;
  }

  return (
    <div id="greeting">
      {returnGreeting}
    </div>
  );
}

export default Greetings;
