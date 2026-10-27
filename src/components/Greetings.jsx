function Greetings(props) {
  let greeting = "";
  if (props.lang === "es") {
    greeting = "Hola";
  } else if (props.lang === "en") {
    greeting = "Hello";
  } else if (props.lang === "fr") {
    greeting = "Bonjour";
  } else if (props.lang === "de") {
    greeting = "Hallo";
  }
  return (
    <div>
      <h4>{greeting} {props.children}</h4>
    </div>
  );
}
export default Greetings;
