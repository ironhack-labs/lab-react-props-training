const Greetings = (props) =>{
  let languages; 
  switch (props.lang) {
    case "de": languages = "Hallo";
      break;
    case "fr": languages = "Bonjour";
      break;
    case "en": languages = "Hello";
      break;
    case "es": languages = "Hola";
      break;
    default: languages = "Hi";
  }

  return <p className="Greetings">{ languages } {props.children}</p>;
}

export default Greetings;
