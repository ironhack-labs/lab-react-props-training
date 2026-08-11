function Greetings({ lang, children }) {
  let greetingMessage = `Hello ${children}`;

  switch (lang) {
    case "de":
      greetingMessage = `Hallo ${children}`;
      break;
    case "en":
      greetingMessage = `Hello ${children}`;
      break;
    case "es":
      greetingMessage = `Hola ${children}`;
      break;
    case "fr":
      greetingMessage = `Bonjour ${children}`;
      break;
  }

  return (
    <div className="greeting-message">
      <h4>{greetingMessage}</h4>
    </div>
  );
}

export default Greetings;
