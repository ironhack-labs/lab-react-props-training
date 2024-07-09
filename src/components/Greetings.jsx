import React from "react";

function Greetings(props) {
  let language;
  if (props.lang === "de") {
    language = "Hallo";
  } else if (props.lang === "fr") {
    language = "Bonjour";
  } else if (props.lang === "es") {
    language = "Hola";
  } else {
    language = "Hi";
  }
  return (
    <div>
      {language} {props.children}
    </div>
  );
}

export default Greetings;
