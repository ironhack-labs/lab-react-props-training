import React from 'react';

const Greetings = ({ lang, children }) => {
  const greetings = { de: 'Hallo', en: 'Hello', es: 'Hola', fr: 'Bonjour' };
  
  const greenStyle = {
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    padding: '10px',
    margin: '10px',
    borderRadius: '4px',
    fontSize: '20px'
  };

  return (
    <div style={greenStyle}>
      {greetings[lang] || 'Hello'} {children}
    </div>
  );
};

export default Greetings;