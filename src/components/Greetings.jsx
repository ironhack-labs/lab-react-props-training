function Greetings (props){
    const languageGreetings = {
        "de": "hallo",
        "en": "hello",
        "es": "hola",
        "fr": "Bonjour",
    }
    return (
        <p> {languageGreetings[props.lang]} {props.children} </p>
    )
}

export default Greetings