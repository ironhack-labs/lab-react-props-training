import './Greetings.css'

const Greetings = (props) => {

    const lang = props.lang

    if (lang === "de") {
        return (
            <p className='greeting'>Hallo {props.children}</p>
        )
    } else if (lang === "en") {
        return (
            <p className='greeting'>Hello {props.children}</p>
        )
    } else if (lang === "es") {
        return (
            <p className='greeting'>Hola {props.children}</p>
        )
    } else if (lang === "fr") {
        return (
            <p className='greeting'>Bonjour {props.children}</p>
        )
    }




}

export default Greetings