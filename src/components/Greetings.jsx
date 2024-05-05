const Greetings = ({ lang = "en", children }) => {
  return (
    <div className="card">
      {lang === "de" || lang === "en" || lang === "fr" || lang === "fr" ? (
        <p className="text">Hallo {children}</p>
      ) : (
        <p className="text">the language is not supported.</p>
      )}
    </div>
  );
};

export default Greetings;
