function Greetings({ lang, children }) {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };

  return (
    <div style={{ margin: '10px', fontSize: '18px' }}>
      <p>{greetings[lang]}, {children}!</p>
    </div>
  );
}

export default Greetings;