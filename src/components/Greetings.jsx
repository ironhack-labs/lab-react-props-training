
function Greetings(props) {
    let greet = "";

    switch (props.lang) {
        case "de":
        greet = "Hallo";
        break;
        case "fr":
        greet = "Bonjour";
        break;
        case "es":
        greet = "Hola";
        break;
        case "en":
        greet = "Hello";
        break;
    }
    return (<div>
            <h3>{greet} {props.children}</h3>
           </div>
    );   
}

export default Greetings