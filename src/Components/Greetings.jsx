export default function Greetings({ lang, children }) {
  if (lang === "en") {
    return <h1>Hello, {children}!</h1>;
  } else if (lang === "fr") {
    return <h1>Bonjour, {children}!</h1>;
  } else if (lang === "es") {
    return <h1>Hola, {children}!</h1>;
  } else if (lang === "de") {
    return <h1>Hallo, {children}!</h1>;
  } else {
    return <h1>ERROR 404!</h1>;
  }
}
