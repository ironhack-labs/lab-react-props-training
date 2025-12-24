const Greetings = ({ lang, children }) => {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  return (
    <div>
      <p>
        {greetings[lang]}, {children}
      </p>
    </div>
  );
};
export default Greetings;
