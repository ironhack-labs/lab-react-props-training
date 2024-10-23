const Greetings = ({ lang, children }) => {
  const getGreeting = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello'; // Default to English if lang is not recognized
    }
  };

  return (
    <div>
      {getGreeting(lang)} {children}
    </div>
  );
};


export default Greetings;