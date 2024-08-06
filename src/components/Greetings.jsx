


function Greetings(props){
    const { lang, children } = props;

  const getGreeting = (language) => {
    if (language === 'de') return 'Hallo';
    if (language === 'en') return 'Hello';
    if (language === 'es') return 'Hola';
    if (language === 'fr') return 'Bonjour';
    return 'Hello'; 
  };

  return (
    <div>
      {getGreeting(lang)} {children}
    </div>
  );
}


export default Greetings