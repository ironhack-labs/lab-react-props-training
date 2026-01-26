import React from "react";

function Greeting({lang, children}) {
  const greeting =
    lang === "de"
      ? "Halo"
      : lang === "en"
      ? "Hello"
      : lang === "es"
      ? "Hola"
      : lang === "fr"
      ? "Bonjour"
      : "Hola";
  return (
    <div>
      {greeting} {children}
    </div>
  );
}

export default Greeting;
