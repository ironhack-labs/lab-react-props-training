import React from "react";

function Greetings(props) {
  const saludo = {
    fr: "Bonjour",
    de: "Hallo",
    en: "Hello",
    es: "Hola",
  };

  return (
    <div>
      <p id="greetings">
        {saludo[props.lang]} {props.children}
      </p>
    </div>
  );
}
export default Greetings;
