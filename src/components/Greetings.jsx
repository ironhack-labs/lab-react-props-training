export function Greetings(props) {
    const localeTranslations = {
        "en" : `Hello ${props.children}`,
        "de" : `Hallo ${props.children}`,
        "fr" : `Bonjour ${props.children}`,
    }
    const container = {
      border: "1px solid",
      margin: "0 5px 10px",
      padding: "2px",
    };
  return (
    <div style={container}>
      <p>{localeTranslations[props.lang]}</p>
    </div>
  );
}
