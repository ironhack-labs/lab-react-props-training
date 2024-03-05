const Greetings = ({ lang, children }) => {
    const GreetingsMessages = {
        de: `Hallo ${children}`,
        en: `Hello ${children}`,
        es: `Hola ${children}`,
        fr: `Bonjour ${children}`
    };

    const greetingsText = GreetingsMessages[lang];
    return <div className="Greetings">{greetingsText}</div>;
};

export default Greetings;