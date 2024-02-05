function Greetings ({ lang, children}){
    let greetingText = '';

    if (lang === 'de') {
        greetingText = 'Hallo';
    } else if (lang === 'en') {
        greetingText = 'Hello';
    } else if (lang === 'es') {
        greetingText = 'Hola';
    } else if (lang === 'fr') {
        greetingText = 'Bonjour';
    }


    return (
        <div className="greetings">
            <p> {greetingText}, {children} </p>
        </div>
    )
};

export default Greetings;