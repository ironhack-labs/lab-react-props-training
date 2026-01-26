import "./Greetings.css";

function Greetings(props) {
  const lang = props.lang;
  const greetings = {
    de: "Halo",
    es: "Hola",
    en: "Hello",
    it: "Salve",
    fr: "Salut",
  };
  return (
    <p>
      {greetings[lang]} {props.children}
    </p>
  );
}

export default Greetings;
