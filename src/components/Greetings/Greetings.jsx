import React from "react";

import "./Greetings.css";

function Greetings(props) {
  let greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div className="greeting">
      <p>{`${greetings[props.lang]} ${props.children}`}</p>
    </div>
  );
}

export default Greetings;
