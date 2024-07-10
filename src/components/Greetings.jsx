

function Greetings(props) {
  
    let greetLanguage = "";

    if(props.lang === "de"){
        greetLanguage = "Hallo";
    } else if(props.lang === "en"){
        greetLanguage = "Hello";
    } else if(props.lang === "es"){
        greetLanguage = "Hola";
    } else if(props.lang === "fr"){
        greetLanguage = "Bonjour"
    }
  
  return (
    <div id="greet">
        <p>{greetLanguage} {props.children}</p>
    </div>
  )
}

export default Greetings;