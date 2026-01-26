function Greetings({ lang, children }) {
    const greetings = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }

    return (
        <div className="border">
            {greetings[lang]} {children}
        </div>
    )
}

export default Greetings;