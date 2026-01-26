
const greetingsMap = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };
  
  function Greetings({ lang, children }) {
    return <p>{greetingsMap[lang]} {children}</p>;
  }
  
  export default Greetings;