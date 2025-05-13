function Greetings(props){
    let returnGreeting = "";
    switch(props.lang){
        case "es":
            returnGreeting = `Hola ${props.children}`;
            break;
        case "de":
            returnGreeting = `Hallo ${props.children}`;
            break;
        case "fr":
            returnGreeting = `Salut ${props.children}`;
            break;
        case "en":
        default: 
            returnGreeting = `Hello ${props.children}`;
            break;
    }
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", display: "flex" }}>
      {returnGreeting}
    </div>
  );
}

export default Greetings;