function Greetings(props) {
    const langs = { de: "Hallo", en: "Hello", es: "Hola", fr: "Bonjour"};
    const greeting = langs[props.lang];
    return (
        <>
        {greeting} {props.children}
        </>
    )
}

export default Greetings;