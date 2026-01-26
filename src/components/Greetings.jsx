import "./BoxColor.css";

function Greetings(props) {
  let greeting = {
    en: "Hello",
    fr: "Bonjour",
    de: "Halo",
    es: "Hola",
  };
  return (
    <div>
      {greeting[props.lang]} {props.children}
    </div>
  );
}

export default Greetings;
