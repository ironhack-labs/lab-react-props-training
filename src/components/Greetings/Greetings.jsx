const Greetings = (props) => {

    const lang = props.lang

    const greetings = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    };


    return (

        <p>
            {`${greetings[lang]} ${props.children}`}
        </p>

    )
}

export default Greetings