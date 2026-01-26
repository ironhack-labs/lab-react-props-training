function Greeting(props) {
    let language = "";
        if (props.lang === "de") {
        language = `Hallo ${props.children}`;
        }
        else if (props.lang === "en") {
         language = `Hello ${props.children}`;
        }
        else if (props.lang === "es") {
        language = `Holla ${props.children}`;
        }
        else if (props.lang === "fr") {
        language = `Bonjour ${props.children}`;
    }

    return (
        <div>
            {language}
        </div>
    )
}

export default Greeting 