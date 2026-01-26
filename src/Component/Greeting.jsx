function GreetBox(props) {
  let greeting = "";

  if (props.lang === "de") {
    greeting = "Hallo";
  } else if (props.lang === "fr") {
    greeting = "Bonjour";
  } else {
    greeting = "Hello"; 
  }

  return (
    <div className="greetings">
      <p>{greeting} {props.children}</p>
    </div>
  );
}

export default GreetBox;