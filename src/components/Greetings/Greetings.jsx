import './Greetings.css'

function Greetings (props) {
    let text = ''
    switch(props.lang){
        case "de":
            text = 'Hallo'
            break;
        case "fr":
            text = 'Bonjour'
            break;
        case "es":
            text = 'Hola'
            break;
        case "en":
            text = 'Hello'
            break;
    }

    return  <div id="container2">
                <p>{text} {props.children}</p>
            </div>
}

export default Greetings