export const Greetings = (props) => {
    let greeting = "";
  
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
  
    return (
      <div className="container other">
        {greeting} {props.children}
      </div>
    );
  };