function Greetings({ lang, children }) {
    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
    };

    const word = greetings[lang] || "Hello";

    return (
        <div className="greeting-box">
            {word} {children}
        </div>
    );
}
export default Greetings