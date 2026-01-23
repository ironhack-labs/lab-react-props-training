import { Component } from "react"
import "./Greetings.css"
const Greetings = ({ lang, children }) => {
    const languages = {
        fr: 'Bonjour',
        en: 'Hello',
        es: 'Hola',
        de: 'Hallo'
    };

    return (
        <div className="greeting">
            <p>{languages[lang]} {children}</p>
        </div>
    );
};

export default Greetings