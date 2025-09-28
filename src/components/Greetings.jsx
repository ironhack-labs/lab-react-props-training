import React from "react";

function Greetings(props) {
  let greetLanguage = "";

  switch (props.lang) {
    case "de":
      greetLanguage = "Hallo";
      break;
    case "en":
      greetLanguage = "Hello";
      break;
    case "es":
      greetLanguage = "Hola";
      break;
    case "fr":
      greetLanguage = "Bonjour";
      break;
    default:
      greetLanguage = "Hello";
  }

  return (
    <>
      <p className="Greetings">
        {greetLanguage} {props.children}
      </p>
    </>
  );
}

export default Greetings;
