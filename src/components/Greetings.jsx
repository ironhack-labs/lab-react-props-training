function Greetings(props) {

    let greetings;

    if (props.lang === "de") {
        greetings = "Hallo";

    } else if (props.lang === "en") {
        greetings = "Hello"

    } else if (props.lang === "es") {
        greetings = "Hola"

    } else if (props.lang === "fr") {
        greetings = "Bonjour"
    }

    return <p>{greetings}{props.children}</p>


}

export default Greetings