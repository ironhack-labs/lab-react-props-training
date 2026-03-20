function Greetings({ lang, children }) {
  let greeting;

  if (lang === "de") greeting = "Hallo";
  else if (lang === "fr") greeting = "Bonjour";
  else if (lang === "en") greeting = "Hello";
  else greeting = "Hi";

  return (
    <p>
      {greeting} {children}
    </p>
  );
}

export default Greetings;
