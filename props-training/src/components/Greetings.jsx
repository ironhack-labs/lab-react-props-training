function Greeting(props) {
  const greeting = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  return (
    <p>
      {greeting[props.lang]} {props.children}{" "}
    </p>
  );
}
export default Greeting;
