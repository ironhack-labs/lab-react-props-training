function Greetings(props){
    return(
        <>
    {props.lang === "es" && <h1 className="Greet" >Hola {props.name}</h1>}
    {props.lang === "pr" && <h1 className="Greet">Oi {props.name}</h1>}
    {props.lang === "en" && <h1 className="Greet">Hello {props.name}</h1>}

    </>
    );
}

export default Greetings;
