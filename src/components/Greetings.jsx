function Greetings(props){
    
    if (props.lang === "de"){
        return <h3>Hallo {props.children}</h3>
    } else if (props.lang === "en"){
        return <h3>Hello {props.children}</h3>
    } else if (props.lang === "es"){
        return <h3>Holla {props.children}</h3>
    } else if (props.lang === "fr"){
        return <h3>Bonjour {props.children}</h3>
    }

    

}  

export default Greetings
