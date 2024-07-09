const Greetings = ({ lang, children }) => {
  const langs = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };
  return (
    <p className="greetings">
      {langs[lang]} {children}
    </p>
  );
};

export default Greetings;
