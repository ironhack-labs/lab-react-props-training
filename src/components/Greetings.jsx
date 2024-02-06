function Greetings (props) {
    if (props.lang === "de") {
        return <p style={{border:"2px solid black", width: 150, padding: 10}}>Hallo {props.children}</p>
    } else if ( props.lang === "fr") {
        return <p style={{border:"2px solid black", width: 150, padding: 10}}>Bonjour {props.children}</p>
    } else if (props.lang === "es") {
        return <p style={{border:"2px solid black", width: 150, padding: 10}}>Hola {props.children}</p>
    } else if (props.lang === "en") {
        return <p style={{border:"2px solid black", width: 150, padding: 10}}>Hello {props.children}</p>
    }
}

export default Greetings

/* 
function Greetings (props) {
    let greeting;

    switch(props.lang) {
        case "de": greeting = "Hallo";
        break
        case "fr": greeting = "Bonjour";
        break
        case "es": greeting = "Hola";
        break
        case "en": greeting = "Hello"
        break
    }

    return <h3>{greeting} {props.children}</h3>
}


*/