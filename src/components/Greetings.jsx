const greetings = {
  de: "Hallo",
  en: "Hello",
  fr: "Bonjour",
  es: "Hola",
};

function Greetings({ lang, children }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        border: "2px solid #000",
        padding: "5px",
        margin: "10px",
      }}
    >
      {greetings[lang]} {children}
    </div>
  );
}

export default Greetings;
