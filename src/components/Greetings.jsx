export default function Greetings(props) {
  const greeting = {
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
    es: "Hola",
  };

  return (
    <h1>
      {greeting[props.lang]} {props.children}
    </h1>
  );
}
