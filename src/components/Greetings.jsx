function Greetings(props) {

let greetingText = "";

    switch(props.lang){
        case "de":
            greetingText = "Hallo";
            break;
            case "fr":
            greetingText = "Bonjour";
            break;
            default:
                greetingText = "Hello";
    }

  return (
    <div className='greetings' style={{
        border:"1px solid black",
        padding:"10px",
        margin:"10px 0px",
        fontFamily:"sans-serif",
        fontSize:"20px",
        textAlign:"left"
    }}>
        {greetingText} {props.children}
    </div>
    
  )
}

export default Greetings