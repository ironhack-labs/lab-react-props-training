function Greetings ({lang, children}) {
    const helloString = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    return (
        <div className="greetings" >{helloString[lang]} {children}</div>
    )
}

export default Greetings;