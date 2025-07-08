function Greetings ({lang, children}) {
    const greetings = {
        de: "Hallo",
        en: "Hello",
        fr: "Bonjour",
        es: "Hola"
    }

    return (
        <div style={{border:"1px solid red", backgroundColor:"pink"}}>
            {greetings[lang]} {children}
        </div>
    )
}

export default Greetings