const greetings = { de: 'Hallo', en: 'Hello', es: 'Hola', fr: 'Bonjour' };

function Greetings({ lang, children }) {
  return <p>{greetings[lang]} {children}!</p>;
}

export default Greetings;
