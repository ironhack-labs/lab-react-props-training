function Greetings(props) {
  const dictionary = [
    { lang: "de", greeting: "Hallo" },
    { lang: "fr", greeting: "Bonjour" },
    { lang: "es", greeting: "Ola" },
    { lang: "en", greeting: "Hello" }
  ];

  let greetingMsg = dictionary.find((x) => x.lang === props.lang).greeting;

  return (
    <div className="solidBorder">
      <p>{greetingMsg} {props.children}</p>
    </div>
  );
}

export default Greetings;
