import "./Greetings.css"


function Greetings({lang, children}) {

    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    return (
        <div className="greetings"
           style={{
                display: "flex",
                border: "2px solid black",
                padding: "10px",
                margin: "15px 5px",
                textAlign: "left"
            }}
            >
            <p style ={{margin: 0}}>
            {greetings[lang]} {children}
            </p>

        </div>

    )
}

export default Greetings