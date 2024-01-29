export default function Greetings({lang, children}) {
    const greeting = getGreetingLang(lang);
    return (
        <h3>{greeting} {children}</h3>
    );
}

function getGreetingLang(lang) {
    switch(lang) {
        case 'de':
            return 'Hallo';
        case 'en':
            return 'Hello';
        case 'es':
            return 'Hola';
        case 'fr':
            return 'Bonjour';
    }
}