import React from 'react'

const Greetings = ({lang, children}) => {
    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    };
    const greetingText = greetings[lang] || 'HOLA';
    return (

        <div>
            <p>{greetingText} {children}</p>
        </div>
    )
}

export default Greetings
