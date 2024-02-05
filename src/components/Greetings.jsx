function Greetings(props){

    let receivedMessage = '';
    switch (props.lang){
        case 'de':
            receivedMessage = "Hallo!";
            break
        case 'en':
            receivedMessage = "Hello!";
            break
        case 'es':
            receivedMessage = "Holla!";
            break
        case 'fr':
            receivedMessage = "Salut!";
            break
        case 'pt':
            receivedMessage = "Olá!";
            break
    }

    return (
        <div>
            <p>{receivedMessage}</p>
        </div>
    )
}

export default Greetings