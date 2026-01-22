function Greetings(props) {
  return (
    <div className="greetings-container">
      <p>
        {props.lang === "de"
          ? `Hallo ${props.children}`
          : `Bonjour ${props.children}`}
      </p>
    </div>
  );
}

export default Greetings;
