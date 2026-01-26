
function Greetings(props){
    let greeting= ''
    if (props.lang === 'de'){
        greeting = 'Hola'
    }
    else if (props.lang === 'fr'){
        greeting= 'Bonjour'
    }
    
    return(
        <div className="greeting">
            {greeting}{props.children}
        </div>
    )

}

export default Greetings