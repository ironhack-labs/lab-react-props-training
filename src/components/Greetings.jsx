function Greetings(props){
let greeting =''

    if(props.lang==='de'){

        greeting ='Hallo'
    }
    else if(props.lang==='fr'){

        greeting='Bonjour'
    }else if(props.lang==='es'){

        greeting='Hola'
    }

    return(
<>
{greeting} {props.children}
</>
    )
}

export default Greetings

