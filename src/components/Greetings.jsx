import React from 'react';

const greetingsMap = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
};

export default function Greetings({ lang, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      {greetingsMap[lang] || 'Hello'} {children}
    </div>
  );
}
