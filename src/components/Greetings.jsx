function Greetings (props) {
    if(props.lang === "de") {
        return (
            <h3 className = "speak">Hallo {props.children}</h3>
        )
    }
    else if(props.lang === "fr") {
        return (
            <h3 className = "speak">Bonjour {props.children}</h3>
        )
    }
    else if(props.lang === "es") {
        return (
            <h3 className = "speak">Holla {props.children}</h3>
        )
    }
    else if(props.lang === "en") {
        return (
            <h3 className = "speak">Hello {props.children}</h3>
        )
    }
}
export default Greetings