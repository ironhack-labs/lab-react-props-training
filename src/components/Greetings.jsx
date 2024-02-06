function Greetings(props) {
    let greeting = ""; // intial empty string.
    // switch statement created to specify the greeting based on the language.
    switch (props.lang) {
      case "de":
        greeting = "Hallo";
        break;
      case "en":
        greeting = "Hello";
        break;
      case "es":
        greeting = "Hola";
        break;
      case "fr":
        greeting = "Bonjour";
        break;
      default:
        greeting = "Hello";
    }
  // calling the function with the greeting (switch statement) and the children that is defined in the App.jsx file.
    return (
      <div className="greetings">
        <p>{greeting} {props.children}</p>
      </div>
    );
  }
  export default Greetings;