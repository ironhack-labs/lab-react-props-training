import "./greetings.css" 
function Greetings(props) {
    console.log(props)
    const greeting = {
        es:"Hola",
        fr:"Bonjour",
        de: "Hallo",
        en: "Hello",
    }
return <div className="Greetings">
{greeting[props.lang]} {props.children}
</div>;
}

export default Greetings;