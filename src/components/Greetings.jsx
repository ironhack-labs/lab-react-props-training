

function Greetings (props) {
    return (
          <div className="greetings">
            {props.lang === 'de' && <p>Hallo {props.children}</p>}
            {props.lang === 'fr' && <p>Bonjour {props.children}</p>}
          </div>
      );
    }

export default Greetings