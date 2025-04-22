const Greetings = ({ lang, children }) => {
    const greetingsMap = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
    };
  
    const greeting = greetingsMap[lang] || 'Hello';
  
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        {greeting} {children}
      </div>
    );
  };
  
  export default Greetings;