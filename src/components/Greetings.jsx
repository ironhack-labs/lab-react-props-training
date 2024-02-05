function Greetings(props) {
    let hi;
    
    if (props.lang === "de") {
        hi = "Hallo";
    } else if (props.lang === "en") {
        hi = "Hello";
    } else if (props.lang === "es") {
        hi = "Buenos";
    } else if (props.lang === "fr") {
        hi = "Bonjour";
    }
    
    return(
        <div className="box">
            <p>{hi} {props.children}</p>
        </div>
    );
}

export default Greetings;