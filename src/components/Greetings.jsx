function Greetings(props) {
  let languageGreeting;
  if (props.lang === "de") {
    languageGreeting = "Hallo";
  } else if (props.lang === "fr") {
    languageGreeting = "Bonjour";
  } else if (props.lang === "es") {
    languageGreeting = "Hola";
  } else {
    languageGreeting = "Hello"
  }

  return (
    <>
      <div className="greeting-container">
        <p>{languageGreeting} {props.children}</p>
      </div>
    </>
  );
}

export default Greetings;
