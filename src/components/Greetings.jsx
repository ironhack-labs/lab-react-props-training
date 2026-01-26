function Greetings (props) {

    const  lang = {
        es : "Hola",
        fr : "Bonjour",
        pr : "Ola",
        de : "Hallo",
    }

    const greeting = lang [props.lang];

    

    return (

        <div> 
            <p>{greeting} {props.children}</p> 
            </div>
    )
}

export {Greetings};