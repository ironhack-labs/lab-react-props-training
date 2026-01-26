function Greetings({ lang, children }) {
  function displayText(text) {
    return (
      <div className="user-card">
        <p>{text}</p>
      </div>
    );
  }

  switch (lang) {
    case 'de':
      return displayText(`Hallo ${children}`);
    case 'en':
      return displayText(` Hello ${children}`);
    case 'es':
      return displayText(` Hola ${children}`);
    case 'fr':
      return displayText(` Bonjour ${children}`);
  }
}

export default Greetings;