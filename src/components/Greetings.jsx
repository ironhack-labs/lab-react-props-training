function Greetings (props){
        if (props.lang === "fr"){
            return <p>Bonjour</p>
        } else if (props.lang === "en"){
            return <p>Hello</p>
        } else if (props.lang=== "de"){
            return <p>Hallo</p>
        } // I don't speak spanish

}

export default Greetings;