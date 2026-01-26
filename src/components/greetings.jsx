import React from 'react';

function Greetings({ lang, children }) {
    
  const greetings = {
    de: 'Hallo',   
    en: 'Hello',    
    es: 'Hola',     
    fr: 'Bonjour',  
  };

  return (
    <div className="d-flex align-items-center border border-dark p-2 mb-3b-3 gap-3 container w-50 mx-auto mt-3">
      <p className="mb-0">
        {greetings[lang]} {children}
      </p>
    </div>
  );
}

export default Greetings;

