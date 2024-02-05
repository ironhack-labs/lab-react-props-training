
const Greetings = (props) => {
    const lang = props.lang
    const greetings = {
        es: 'Hola',
        en: 'Hello',
        fr: 'Bonjour',
        de: 'Hallo',
    }
    return (
        <p>{greetings[lang]} {props.children}</p>
    )
}

export default Greetings