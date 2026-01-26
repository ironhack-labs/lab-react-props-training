import './../Greetings/Greetings.css'
const Greetings = (props) => {

    let lang = props.lang

    if (lang === 'de') {
        return <p>Hallo {props.children}</p>
    }
    if (lang === 'en') {
        return <p>Hello {props.children}</p>
    }
    if (lang === 'es') {
        return <p>Hola {props.children}</p>

    }
    if (lang === 'fr') {
        return <p>Bonjour {props.children}</p>
    }
}
export default Greetings





