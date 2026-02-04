import React from 'react';
import PropTypes from 'prop-types';
/**
 * Greetings Component
 * Exibe uma saudação no idioma especificado.
 */
const greetingsMap = {
  de: 'Hallo',
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
};

const Greetings = React.memo(function Greetings({ lang, children }) {
  return (
    <div className="greetings" aria-label={`Greetings in ${lang}`}>
      {greetingsMap[lang] || 'Hello'} {children}
    </div>
  );
});

Greetings.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Greetings;
