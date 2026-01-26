function Greetings(props) {
  let text = "";
  switch (props.lang) {
    case "en":
      text = `Hello,`;
      break;
    case "de":
      text = `Hallo,`;
      break;
    case "es":
      text = `Holla,`;
      break;
    case "fr":
      text = `Bonjour,`;
      break;
  }

  return (
    <div>
      <h3>
        {text}
        {props.children}
      </h3>
    </div>
  );
}

export default Greetings;
