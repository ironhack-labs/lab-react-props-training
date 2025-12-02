function Greetings(props) {
    const { lang, children } = props

    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    };

    return (
        <div className="Greetings" style={{ border: "3px solid #000000ff", padding: "1px", margin: "6px", width: "35%" }}>

            <p style={{ fontFamily: "Verdana", fontSize: "24px", margin: "6px" }}>{greetings[lang]} {children}</p>

        </div>


    )
}

export default Greetings