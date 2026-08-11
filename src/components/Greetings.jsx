function Greetings(props){

    let helloMessage = "Hello";
    
    if(props.lang === "de"){
        helloMessage = "Hallo";
    } else if(props.lang === "fr"){
        helloMessage = "Bonjour";
    } else if(props.lang === "es"){
        helloMessage = "Ola";
    }

    return(
        <div style={{ display: 'flex', width: '700px', padding: '5px', marginBottom: '10px', marginLeft: '10px', border: '1px solid black' }}>
            <h3>{helloMessage} {props.children}</h3>
        </div>
    );
}

export default Greetings;