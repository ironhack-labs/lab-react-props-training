function Greetings({ lang, children }) {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };


  return (
    <div className="greetings">
      <p>{greetings[lang] ? greetings[lang] : 'Hello'} {children}</p>
    </div>
  );
}

export default Greetings;