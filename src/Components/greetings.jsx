

function Greetings({ lang, children }) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div className="border">
      {greetings[lang] ? `${greetings[lang]}, ${children}!` : "Language not supported"}
    </div>
  );
}

export default Greetings;
