
function Greetings( {lang, children} ) {
    return (
        <div className="border border-dark border-2 mb-2 p-2 w-75">
            {LanguageSelector(lang)} {children}</div>
    );
}

function LanguageSelector(language) {
    switch(language) {
        case "de":
            return "Hallo";
        case "fr":
            return "Bonjour";
        case "es":
            return "Hola";
        case "en":
            return "Hello";
    }
}

export default Greetings;