import React from 'react';

function Greetings({ lang, children }) {
  return (
    <div className="idioma">
        {`${{ de: 'Hallo', en: 'Hello', es: 'Hola', fr: 'Bonjour' }[lang]}, ${children}`}
    </div>
    );
}

export default Greetings;
