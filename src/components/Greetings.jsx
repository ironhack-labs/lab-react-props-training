const Greetings = ({ lang, children }) => {
  const greet = { de: "Hallo", fr: "Bounjour" };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "2px solid black" }}>
      <h1>
        {greet[lang]} {children}
      </h1>
    </div>
  );
};

export default Greetings;
