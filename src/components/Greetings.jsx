import "./Greetings.css";

function Greetings({ lang, children }) {
  // Selecciona el saludo en función del idioma
  const greetingMap = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  const greeting = greetingMap[lang];

  return (
    <div className="greetings">
      {greeting} {children}
    </div>
  );
}

export default Greetings;
