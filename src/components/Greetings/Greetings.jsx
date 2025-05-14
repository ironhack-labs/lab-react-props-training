function Greeting(props){

    let greeting = "";
  if(props.lan === "de") {
    greeting = "Hallo"
  }else if (props.lan === "fr") {
    greeting = "Bonjour"
  }else if (props.lan === "en") {
    greeting = "Hello"
  }else if (props.lan === "es") {
    greeting = "Hola"
  }

  return (
    <div className="all-greetings">
      <p>{greeting} {props.children}</p>
    </div>
  );
}

export default Greeting