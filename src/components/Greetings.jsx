import './Greetings.css';

function Greetings( { lang, children }) {
    const greetings = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bonjour",
    };
    return (
      <div className="greetings">
        <h1>

          {greetings[lang]} {children}
        </h1>
      </div>
    );
}

export default Greetings