const Greetings = ({ lang, children }) => {
  let greeting = "";
  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
  }

  return (
    <>
      <p>
        {greeting} {children}
      </p>
    </>
  );
};

export default Greetings;
