import React from "react";

function Greetings({ lang, children }) {
  const greet = {
    en: "Hello",
    es: "Ola",
    fr: "Bonjour",
    de: "Hallo",
  };
  return (
    <div>
      <p>
        <b>{greet[lang] || greet["en"]}</b> {children}
      </p>
    </div>
  );
}

export default Greetings;
