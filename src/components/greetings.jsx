function Greetings(props){
 let text = "";
 switch (props.lang){
 case "de":
    text = "Hallo";
    break;
case "fr":
    text = "Bonjour";
    break;
case "en":
    text = "Hello";
    break;
case "es":
text = "Hola";
break;
}
    return (<>
    <p> {text} {props.children} </p></>)
}

export default Greetings;