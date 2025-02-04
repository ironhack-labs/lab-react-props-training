function Greetings(props) {
   let greeting;
   if(props.lang === "de") {
    greeting = `Hallo ${props.children}`;
}
    else if (props.lang === "fr")
        {
            greeting = `Bonjour ${props.children}`;
        }
    return (
        <p className="greeting">{greeting}</p>
    )}


export default Greetings