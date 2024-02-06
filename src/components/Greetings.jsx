function Greetings (props) {
    let text = ""
    if (props.lang === "de") {
        text = "hallo"
    }else if(props.lang === "fr") {
        text = "bonjour"
    }else if (props.lang === "es") {
        text = "hola"
    }else if ( props.lang === "en") {
        text = "hello"
    }
    const styles = {border : "1px solid black"}

    return ( <p style = {styles}>{text} {props.children}</p>)

}

export default Greetings