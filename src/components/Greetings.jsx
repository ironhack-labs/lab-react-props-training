import React from "react";

const Greetings = ({ lang, children }) => (
  <div className="idioma">
    {`${{ de: "Hallo", en: "Hello", es: "Hola", fr: "Bonjour" }[lang]}, ${children}`}
  </div>
);

export default Greetings;
