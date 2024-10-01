import "../App.css";

function Greetings ( { lang , children}) {

    let greeting;

            switch (lang) {
                case "de":
                    greeting = `Hallo ${children}`;
                    break;
                case "en":
                    greeting = `Hello ${children}`;
                    break;
                case "es":
                    greeting = `Hola ${children}`;
                    break;
                case "fr":
                    greeting = `Bonjour ${children}`;
                    break;
                default:
                    greeting = `Hello ${children}`;
            }

    return <p className="greetings">{greeting}</p>

}

export default Greetings;