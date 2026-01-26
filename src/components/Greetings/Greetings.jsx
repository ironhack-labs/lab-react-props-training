import Panel from "../ui/panel";


function Greetings ({className='', lang, children}) {

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
        default:
            greet = "Hello";
            break;
    }

    return (
        <Panel className={className}>
            {greet} {children}
        </Panel>
    )
}

export default Greetings;