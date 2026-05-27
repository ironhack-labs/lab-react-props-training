function Greetings (props) {
    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
    };
    return (
        <p>
            {greetings[props.lang]} {props.children}
        </p>
    );
}

export default Greetings;