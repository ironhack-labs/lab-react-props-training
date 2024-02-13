function Greetings(props) {
  let greeting;
  if (props.lang === "es") {
    greeting = "hola";
  } else if (props.lang === "de") {
    greeting = "hallo";
  } else if (props.lang === "en") {
    greeting = "hello";
  } else {
    greeting = "bonjour";
  }
  return (
    <div>
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
