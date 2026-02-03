function Greetings(props) {
    let greeting = "";

    if (props.lang === "de") greeting = "Hallo";
    if (props.lang === "en") greeting = "Hello";
    if (props.lang === "es") greeting = "Hola";
    if (props.lang === "fr") greeting = "Bonjour";

    return (
        <p>
            {greeting} {props.children} 
        </p>
    );
}

export default Greetings;