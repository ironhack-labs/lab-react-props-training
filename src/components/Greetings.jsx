import React from "react";

const Greetings = ({ lang, children }) => {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <p>
      {greetings[lang] } {children}!
    </p>
  );
};

export default Greetings;