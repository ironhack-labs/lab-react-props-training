function Greetings(props) {
    //saludos según el idioma
    const greetings = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bonjour",
    };
  
    const greetingText = greetings[props.lang] || "Hello"
  
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
        <p>
          {greetingText} {props.children}
        </p>
      </div>
    )
  }
  
  export default Greetings;