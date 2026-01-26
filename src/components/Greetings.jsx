function Greetings(props) {
    let text
    if(props.lang === "de"){
        text = "hallo"
    }
    else if (props.lang === "fr") {
        text = "bonjour"
    }
    return (
        <div>
            <p>{text} {props.children}</p>
        </div>
    )
}

export default Greetings