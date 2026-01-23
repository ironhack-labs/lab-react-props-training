import berlin from "../data/berlin.json";

function Greetings({ lang, children }) {
  let greeting = "";

  if (lang === "de") {
    greeting = `Hallo ${berlin.firstName}`;
  } else if (lang === "en") {
    greeting = `Hello ${berlin.firstName}`;
  } else if (lang === "es") {
    greeting = `Hola ${berlin.firstName}`;
  } else if (lang === "fr") {
    greeting = `Bonjour ${berlin.firstName}`;
  } else {
    greeting = `Hello ${berlin.firstName}`;
  }

  return (
    <div>
      {greeting} {children}
    </div>
  );
}

export default Greetings;
