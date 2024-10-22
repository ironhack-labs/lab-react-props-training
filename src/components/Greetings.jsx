import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;
  let greeting;

  if (lang === "en") {
    greeting = "Hello";
  } else if (lang === "de") {
    greeting = "Hallo";
  } else if (lang === "es") {
    greeting = "Hola";
  } else if (lang === "fr") {
    greeting = "Bonjour";
  } else {
    greeting = "Hello";
  }

  return (
    <div className="greetings">
      {greeting} {children}
    </div>
  );
};

export default Greetings;
