function Greetings({ lang, children }) {
  let greets = "";
  switch (lang) {
    case "de":
      greets = "Hallo";
      break;
    case "fr":
      greets = "Bonjour";
      break;
    case "en":
      greets = "Hi";
      break;
    case "es":
      greets = "Hola";
      break;
    default:
      greets = "No language";
  }
  
  return (
    <p>
      {greets} {children}
    </p>
  );
}

export default Greetings;
