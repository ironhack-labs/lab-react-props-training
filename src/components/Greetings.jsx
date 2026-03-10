import "./Greetings.css";

const Greetings = ({ lang, children }) => {
  const greetingsMap = { de: "Hallo", en: "Hello", es: "Hola", fr: "Bonjour" };

  return (
    <p className="greet-message">
      {greetingsMap[lang]} {children}
    </p>
  );
};

export default Greetings;
