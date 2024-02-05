function Greetings (props) {

    let hello = 'Hello';

    switch (props.lang) {
        case 'de':
            hello = `Hallo`;
            break;
        case 'fr':
            hello = `Bonjour`;
            break;
    }

    return (
        <div className="Greetings box">
             <p>{hello} {props.children}</p>
        </div>
    )

}

export default Greetings;