const Greetings = ({ lang, children }) => {
  console.log("how are you");

  const getLang = ({lang}) => {
    switch (lang) {
      case "de":
        return "Hallo";
      case "en":
        return "Hello";
      case "es":
        return "Hola";
      case "fr":
        return "Bonjour";
    }
  };
  const greeting = getLang({lang});

  return (
    <>
      <p>{`${greeting} ${children}`}</p>
    </>
  );
};

export default Greetings;
