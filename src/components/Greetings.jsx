function Greetings (props){
    function language(){
        if (props.greeting.lang  === 'en' ){
            return "Hello";
        } else if (props.greeting.lang === 'es'){
            return "Hola" ;
        } else if (props.greeting.lang === 'de'){
            return "Hallo";
        } else if (props.greeting.lang === 'fr'){
            return "Bonjour";
        }
    };

    return (
        <div>
            {language() + " "+ props.greeting.text}
        </div>
    )
}

export default Greetings;