    function Greetings(props){
        let greetings;
    
        if (props.lang === "de") {greetings = "Hallo";}
        else if (props.lang === "eng") {greetings = "Hello";}
        else if (props.lang === "es") {greetings = "Hola";}
        else if (props.lang === "fr") {greetings = "Bonjour";}
    return(
        <div>   
            {greetings} {props.children}
        </div>
    )
}

export default Greetings;