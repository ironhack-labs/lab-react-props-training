function Greetings({ lang, children }) {
  let greeting = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  if (lang === "de") {
    greeting = "Hallo";
  } else if (lang === "en") {
    greeting = "Hello";
  } else if (lang === "es") {
    greeting = "Hola";
  } else if (lang === "fr") {
    greeting = "Bonjour";
  } else {
    greeting = "Hello"; // Valeur par défaut
  }

  return (
    <div>
      {greeting} {children}
    </div>
  );
}
export default Greetings;
