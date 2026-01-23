function Greetings(probs) {
    let greeting = "";
    if (probs.lang === "en") {
        greeting = "Hello " + probs.children
    } else if (probs.lang === "de") {
        greeting = "Hallo " + probs.children

    } else if (probs.lang === "es") {
        greeting = "Hola " + probs.children

    } else if (probs.lang === "fr") {
        greeting = "Bonjour " + probs.children

    }
    return (
        <div className="cards">
            {greeting}
        </div>
    )

}
export default Greetings;