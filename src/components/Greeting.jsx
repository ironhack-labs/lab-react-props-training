export const Greeting = (props) => {
  const { lang, children } = props;

  let greetingMessage = "";

  switch (lang) {
    case "fr":
      greetingMessage = `Bonjour ${children}`;
      break;
    case "en":
      greetingMessage = `Hello ${children}`;
      break;
    case "es":
      greetingMessage = `Hola ${children}`;
      break;
    case "de":
      greetingMessage = `Hallo ${children}`;
    default:
      greetingMessage = `Hello ${children}`;
  }

  return (
    <>
      <div className="greeting">{greetingMessage}</div>
    </>
  );
};
