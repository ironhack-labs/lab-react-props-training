function Greetings(props) {
    let sayHello = "";
    
    if (props.lang === 'de') {
        sayHello = 'Hallo';
    } else if (props.lang === 'en') {
        sayHello = "Hello";
    } else if (props.lang === 'es') {
        sayHello = "Hola";
    } else if (props.lang === 'fr') {
        sayHello = 'Bonjour';
    }
    return <p>{sayHello} {props.children}</p>
}

export default Greetings;
    

