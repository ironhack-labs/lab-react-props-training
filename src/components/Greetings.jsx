function Greetings (props){
    const getGreeting = () => { 
        switch (props.lang) {
        case 'de':
            return `Hallo ${props.children}!`;
        case 'en':
            return `Hello ${props.children}!`;
        case 'es':
            return `Hola ${props.children}!`;
        case 'fr':
            return `Bonjour ${props.children}!`;
        default:
            return `Hello ${props.children}!`;
    }
};
return (
    <div className="greetings">
      <p>{getGreeting()}</p>
    </div>
  );
}

export default Greetings;