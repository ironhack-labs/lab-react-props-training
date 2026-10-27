import "./Greetings.css";

function Greetings(props) {
  const greetingMessage =
    props.lang === "de"
      ? "Hallo"
      : props.lang === "en"
        ? "Hello"
        : props.lang === "es"
          ? "Hola"
          : props.lang === "fr"
            ? "Bonjour"
            : "";

  return (
    <div className="box">
      <p>
        {greetingMessage} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
