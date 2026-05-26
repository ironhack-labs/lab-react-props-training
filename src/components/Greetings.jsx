
import "./Greetings.css";

const Greetings = ({ lang, children }) => {
  let greeting = "";    
    switch (lang) {
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        default:
            greeting = "Hello";
    }
    return (
        <div className="greetings">
            <h1>{greeting}, {children}!</h1>
        </div>
    );
};

export default Greetings;