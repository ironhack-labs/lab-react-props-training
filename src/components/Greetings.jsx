function Greetings(props) {
    const greetingWord = {
de: "Hallo",
en: "Hello",
es: "Hola",
fr: "Bonjour"
    };

    return(
        <p>{greetingWord[props.lang]} {props.children}</p>
    )

}

export default Greetings