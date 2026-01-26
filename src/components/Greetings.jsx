function Greetings(props) {
  return (
    <div className="greetings-container">
      {props.lang === 'de' ? (
        <p>Hallo {props.children}</p>
      ) : props.lang === 'en' ? (
        <p>Hello {props.children}</p>
      ) : props.lang === 'es' ? (
        <p>Hola {props.children}</p>
      ) : props.lang === 'fr' ? (
        <p>Bonjour {props.children}</p>
      ) : (
        <p>Sorry, {props.children}, I don't know your language</p>
      )}
    </div>
  );
}

export default Greetings;
