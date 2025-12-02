function Greetings(props) {

  const texts = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };

  return (
    <div className="greetings">
      <p>{texts[props.lang]} {props.children}</p>
    </div>
  );
}

export default Greetings;