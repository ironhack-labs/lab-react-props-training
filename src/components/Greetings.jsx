function Greetings({ lang, children }) {
  const messages = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px 0" }}>
      {messages[lang]} {children}
    </div>
  );
}

export default Greetings;
