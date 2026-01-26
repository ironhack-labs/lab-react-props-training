// ? styles
import "./Greetings.css";

export default function Greetings({ lang, children }) {
  const hellos = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <article className="greetings">
      {hellos[lang]} {children}
    </article>
  );
}
