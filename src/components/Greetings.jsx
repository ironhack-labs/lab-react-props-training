function Greetings(props) {
  const { lang, children } = props;

  function translator(language) {
    if (lang === "de") {
      return "Hallo" + children;
    }
    if (lang === "en") {
      return "Hi" + children;
    }
    if (lang === "es") {
      return "Holla" + children;
    }
    if (lang === "fr") {
      return "Bonjour" + children;
    }
  }

  return (
    <div className="greeting" lang={lang}>
      {translator(children)}
    </div>
  );
}

export default Greetings;
