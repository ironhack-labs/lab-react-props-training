const Greetings = (props) => {
  const hiWord = (lang) => {
    switch (lang) {
      case "en":
        return "Hello";
      case "fr":
        return "Bonjour";
      case "de":
        return "Hallo";
      case "es":
        return "Hola";
      default:
        return "Hi";
    }
  };

  return (
    <h2 className="card">
      {hiWord(props.lang)} {props.children}
    </h2>
  );
};

export default Greetings;
