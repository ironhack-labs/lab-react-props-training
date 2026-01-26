let Greetings = (props) => {
  /*
  if (props.lang === "de") {
    return <p className="greeter">Hallo {props.children}</p>;
  } else {
    return <p className="greeter">Bonjour {props.children}</p>;
  }
  */
  return props.lang === "de" ? (
    <p className="greeter">Hallo {props.children}</p>
  ) : (
    <p className="greeter">Bonjour {props.children}</p>
  );
};
export default Greetings;
