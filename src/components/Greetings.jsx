export default function Greetings({ lang, children }) {
    const greetings = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bonjour"
    };
  
    return (
      <div className="greetings">
        {greetings[lang]} {children}
      </div>
    );
  }
  