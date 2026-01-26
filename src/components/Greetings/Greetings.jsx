import "./Greetings.css";

export default function Greetings({ lang, children }) {
  switch (lang) {
    case "de":
      return <p className="greetings">Hallo {children}</p>;
    case "en":
      return <p className="greetings">Hello {children}</p>;
    case "es":
      return <p className="greetings">Hola {children}</p>;
    case "fr":
      return <p className="greetings">Bonjour {children}</p>;
  }
}
