const Greeting = ({ lang, children }) => {
  if (lang === "de") {
    return (
      <div className="greeting">
        <p>Hallo, {children}</p>
      </div>
    );
  }
  if (lang === "fr") {
    return (
      <div className="greeting">
        <p>Bonjour, {children}</p>
      </div>
    );
  }
};

export default Greeting;
