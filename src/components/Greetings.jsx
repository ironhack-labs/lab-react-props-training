
function language (lang) {
    let hi = '';
    switch (lang) {
        case 'de':
            hi = 'Hallo';
            break;
        case 'en':
            hi = 'Hello';          
            break;
        case 'es':
            hi = 'Hola';
            break;
        case 'fr':
            hi = 'Bonjour';
            break;
    }

    return hi;
}

function Greetings ({ lang, children }) {
    return (
        <div className="d-flex p-2 border border-dark my-2 mx-2">
            { language(lang) } { children }
        </div>
    );
}

export default Greetings;