import "./Greetings.css"


function Greetings ({lang, children}) {

    let greet = '';

    switch (lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
        case 'es':
            greet = 'Hola';
            break;
        case 'en':
            greet = 'Hello';
            break;
    }

    return (
        <div className="greeting">
            <h2>{greet} {children}</h2>
        </div>
    )
}

export default Greetings;