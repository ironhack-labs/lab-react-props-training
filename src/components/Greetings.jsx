const Greetings = (props) => {
    let message = "";
    if (props.lang === "de") {
      message = "Hallo";
    } else if (props.lang === "fr") {
      message = "Bonjour";
    } else if (props.lang === "es") {
      message = "Hola";
    } else {
      message = "Hello";
    }
    return (
      <>
        <p>
          {message} {props.children}
        </p>
      </>
    );
  };
  export default Greetings;