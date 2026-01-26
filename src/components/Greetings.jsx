import React from 'react';

function Greetings(props) {
  const { lang, children } = props;

  let greeting;
  if (lang === 'de') {
    greeting = `Hallo ${children}!`;
  } else if (lang === 'en') {
    greeting = `Hello ${children}!`;
  } else if (lang === 'es') {
    greeting = `¡Hola ${children}!`;
  } else if (lang === 'fr') {
    greeting = `Bonjour ${children}!`;
  } else {
    greeting = `Hello ${children}!`;
  }

  const greetingStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '10px',
    marginBottom: '20px',
  };

  return <div style={greetingStyle}>{greeting}</div>;
}

export default Greetings;
