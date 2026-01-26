
function Greetings(props) {
    let greetings = "Hello";

    if (props.lang === "de") {
        greetings = "Hallo";
    }

    if (props.lang === "es") {
        greetings = "Hola";
    }

    if (props.lang === "fr") {
        greetings = "Bonjour"
    }

    return (
        <div>
            {greetings} {props.children}
        </div>
    );
}
export default Greetings;