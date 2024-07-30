function Greetings({ lang, children }) {
  const greeting = {
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
    es: "Hola",
  };

  return (
    <div>
      <h1>
        {greeting[lang]} {children}
      </h1>
    </div>
  );
}

export default Greetings;
