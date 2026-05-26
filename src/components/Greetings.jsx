export function Greetings(props) {
    let message;
    switch (props.lang) {
        case 'de':
            message = 'Hallo'
            break;
        case 'en':
            message = 'Hello'
            break;
        case 'es':
            message = 'Hola'
            break;
        case 'fr':
            message = 'Bonjour'
            break;
        default:
            message = 'Hello'

    }
    return(
        <h2 className="container">{message} {props.children}</h2>
    )
}