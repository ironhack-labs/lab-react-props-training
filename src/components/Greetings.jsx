function Greetings(props) {
    let greeting = "Hello";
    if (props.lang == 'de') {
        greeting = "Hallo";
    } else if (props.lang == 'es') {
        greeting = "Hola";
    } else if (props.lang == 'fr') {
        greeting = "Bonjour";
    }

    return (
        <>
        <div className="greeting">
            {greeting} {props.children}
        </div>
        </>
    ) 
}

export { Greetings };