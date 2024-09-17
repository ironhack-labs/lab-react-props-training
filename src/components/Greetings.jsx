import React from 'react';

export default function Greetings({ lang, children }) {
  return (
    <div className='greeting'>
      <p>
        {lang === "de" ? `Hallo ${children}` : null}
      </p>

      <p>
      {lang === "en" ? `Hello ${children}` : null}
      </p>

      <p>
      {lang === "en" ? `Hello ${children}` : null}
      </p>

      <p>
      {lang === "fr" ? `Bonjour ${children}` : null}
      </p>

      <p>
      {lang === "es" ? `Hola ${children}` : null}
      </p>

    </div>
  );
}
