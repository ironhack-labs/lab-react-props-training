function Greetings({ lang, children }) {
    let Greeting;

    if (lang === "de") {
        greeting = "Hallo";
    } else if (lang === "fr") {
        greeting = "Bonjour";
    } else if (lang === "pt") {
        greeting = "Ola";
    } else if (lang === "es") {
        greeting = "Hola";
    } else {
        greeting = "Hello";
    }

    return (
        <p>
            {Greeting} {children}
        </p>
    );
    }

    export default Greetings;