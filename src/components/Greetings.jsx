function Greetings(props) {    
    if(props.lang === "fr") {
        return <p>Bonjour {props.children}</p>

        
    } else if(props.lang === "es") {
        return <p>Holla {props.children}</p>
    }
}

export default Greetings;