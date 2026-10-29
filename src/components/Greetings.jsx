
function Greetings(props) {
  const greetings = {
    en: 'Hello',
    es: 'Hola',
    de: 'Hallo',
    fr: 'Bonjour'
  };

  return (
    <h2>
      {greetings[props.lang]}, {props.children}!
    </h2>
  );
}

export default Greetings;
