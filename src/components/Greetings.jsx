export default function Greetings({ lang, children }) {
  switch (lang) {
    case "de":
      return (
        <div className="greeting">
          <p>Hallo {children}</p>
        </div>
      );
      break;
    case "en":
      return (
        <div className="greeting">
          <p>Hello {children}</p>
        </div>
      );
      break;
    case "es":
      return (
        <div className="greeting">
          <p>Hola {children}</p>
        </div>
      );
      break;
    case "fr":
      return (
        <div className="greeting">
          <p>Salut {children}</p>
        </div>
      );
      break;
  }
}
