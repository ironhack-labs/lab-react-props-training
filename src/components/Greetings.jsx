function Greetings(props) {
  let greeting = "Hello";

  if (props.lang === "de") {
    greeting = "Hallo";
  }

  if (props.lang === "fr") {
    greeting = "Bonjour";
  }

  if (props.lang === "es") {
    greeting = "Hola";
  }

  return (
    <p>
      {greeting} {props.children}
    </p>
  );
}

export default Greetings;
