import "./Greetings.css";
const HELLO = {
  es: "Hola",
  en: "Hello",
  de: "Hallo",
  fr: "Bonjour",
};

function Greetings(props) {
  return (
    <div className="greeting">
      <p>{HELLO[props.lang]}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Greetings;
