function Greetings(props) {
    if (props.lang === "de")
    {
        return <div class="box">Hallo {props.children}</div>
    }
    else if (props.lang === "en")
    {
        return <div class="box">Hello {props.children}</div>
    }
    else if (props.lang === "es")
    {
        return <div class="box">Hola {props.children}</div>
    }
    else if (props.lang === "fr")
    {
        return <div class="box">Bonjour {props.children}</div>
    }
}

export default Greetings