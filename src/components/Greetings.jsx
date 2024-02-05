function Greetings (props) {
    if(props.lang === "de") {
        return (
            <h3 class = "speak">Hallo {props.children}</h3>
        )
    }

    else if(props.lang === "fr") {
        return (
            <h3 class = "speak">Bonjour {props.children}</h3>
        )
    }

    else if(props.lang === "es") {
        return (
            <h3 class = "speak">Holla {props.children}</h3>
        )
    }

    else if(props.lang === "en") {
        return (
            <h3 class = "speak">Hello {props.children}</h3>
        )
    }
}

export default Greetings