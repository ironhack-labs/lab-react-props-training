function Greetings({ lang, children }) {
  let greeting = "";

  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <div className="card">
      {greeting} {children}
    </div>
  );
}

export default Greetings;
