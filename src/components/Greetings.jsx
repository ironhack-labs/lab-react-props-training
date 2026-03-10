
function Greetings({lang, children}) {

    let greeting = ""

    if(lang === "de"){
        greeting = "Hallo"
    } else if(lang === "en"){
        greeting = "Hello"
    } else if(lang === "es"){
        greeting = "Hola"
    } else if(lang ==="fr"){
        greeting = "Bonjour"
    }

    const style = {border: "1px solid black", 
                   padding:"10px", 
                   marginBottom:"10px"}

    return (
        <div style={style}>
            <p>{greeting} {children}</p>
        </div>
       
    )
}

export default Greetings