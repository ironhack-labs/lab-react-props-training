import React from "react";

const Greetings = (props) => {
  const { lang, children } = props;
  const getGreeting = () => {
    switch (lang) {
      case "de":
        return `Hallo, ${children}!`;
      case "en":
        return `Hello, ${children}!`;
      case "es":
        return `¡Hola, ${children}!`;
      case "fr":
        return `Bonjour, ${children}!`;
      default:
        return `Hello, ${children}!`; // Default to English greeting
    }
  };
  return (
    <div>
      <p>{getGreeting()}</p>
    </div>
  );
};

export default Greetings;
