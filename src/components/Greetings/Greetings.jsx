const Greetings = (props) => {
    const lang = props.lang
    const Greetings = {
        es: "Hola ",
        de: "Hallo ",
        fr: "Bonjour ",
        en: "Hello "
    }
    return <p>{Greetings[lang]}{props.children}</p>
}

export default Greetings