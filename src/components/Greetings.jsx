function Greetings (props){
    let greetings = "";
    if(props.lang === "es"){
        greetings = "holla"}
        else if (props.lang === "en") {
            greetings = "hello"}
            else if(props.lang === "de"){   
                greetings = "hallo"}
                else if(props.lang === "fr") {
                    greetings = "Bonjour"};
return <h3>{greetings} {props.children}</h3>
;
}
export default Greetings