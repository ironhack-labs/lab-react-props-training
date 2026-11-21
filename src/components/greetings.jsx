function Greetings (props) {
    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
    }

    return <div className="name"> {greetings[props.lang]} {props.children} </div>
}

export default Greetings