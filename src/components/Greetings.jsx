function Greetings(props) {
  const greetingsByLang = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };

  return (
    <div>
      <h2>{greetingsByLang[props.lang]} {props.children}</h2>
    </div>
  );
}

export default Greetings;
