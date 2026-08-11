const Greetings = ({lang, children}) => {

    const translations = {
        de: "Hallo",
        en: "Hello",
        fr: "Bonjour",
        es: "Hola",
    }

    const greeting = translations[lang]

    return (
         <div className="container">
                <p className="card"> {greeting} {children} </p>
         </div>
    )
}

export default Greetings