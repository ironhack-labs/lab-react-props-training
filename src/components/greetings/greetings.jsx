import Panel from "../ui/panel/panel";

function Greetings({ className = "", lang, children }) {
    let greet = '';
    switch (lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'en':
            greet = 'Hello';
            break;
        case 'es':
            greet = 'Holi';
            break;
        case 'fr':
            greet = 'Bonjuour';
            break;
        default:
            greet = 'Hello';
            break;
    }
    return (
        <Panel className={className} >{greet} {children}</Panel>
    );
}

export default Greetings;