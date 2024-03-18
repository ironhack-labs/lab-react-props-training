import "./Greetings.css";
const Greetings = (props) => {
  const greeting = {
    de: "Hallo",
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
  };
  return (
    <div className="Greetings">
      {greeting[props.lang]} {props.children}
    </div>
  );
};

export default Greetings;
