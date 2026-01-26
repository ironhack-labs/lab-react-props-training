function Greetings(props) {
    const { lang, children } = props;
    const languages = ["de", "fr", "en", "es"];
    let greeting = '';
    languages.map(elementsInLanguage => {
        if (lang === "de") {
            return (
                greeting = "Hallo "
            )
        }
        else if (lang === "en") {
            return (
                greeting = " Hello "
            )
        }
        else if (lang === "es") {
            return (
                greeting = "Hola"
            )
        }
        else if (lang === "fr") {
            return (
                greeting = "Bonjour"
            )
        }

    })
    return (
        <>
            <h3> {greeting} {children} </h3>



        </>
    )
}

export default Greetings; 