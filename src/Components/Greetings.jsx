function Greetings(props) {
  const greetingsMap = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
    pt: "Olá",
    it: "Ciao",
  };

  const greetingText = greetingsMap[props.lang] || "Hello";

  return (
    <div className="greet">
      <p>
        <b>Language code:</b> {props.lang}
      </p>
      <p>
        {greetingText} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
