import "./greeting.css";

function Greeting({lang,children}){
    
    const greetingMap = {
            de : "Hallo",
            en : "Hello",
            fr : "Bonjour",
            es : "Hola"
        }

    return(

        <div className= "greetings">
            <p><strong>{greetingMap[lang]} {children} </strong></p>
        </div>

    )
}

export default Greeting