function Greetings(props) {
    if (props.lang === "de")
    {
        return <div class="greeting">Hallo {props.children}</div>
    }
    else if (props.lang === "en")
    {
        return <div class="greeting">Hello {props.children}</div>
    }
    else if (props.lang === "es")
    {
        return <div class="greeting">Hola {props.children}</div>
    }
    else if (props.lang === "fr")
    {
        return <div class="greeting">Bonjour {props.children}</div>
    }
}

export default Greetings