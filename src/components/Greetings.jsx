const Greetings = (props) => {
  const { lang, children } = props;
  const greetings = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
    de: "Hallo",
  };
  return (
    <div className="greetings">
      {greetings[lang]} {children}
    </div>
  );
};
export default Greetings;
