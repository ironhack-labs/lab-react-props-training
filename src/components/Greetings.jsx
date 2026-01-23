function Greetings(props){
if(props.lang==="de"){
    return <p>Hallo Ludwig</p>
} else if(props.lang==="en"){
    return <p>Hello Bob</p>
} else if(props.lang==="es"){
    return <p>Hola Antonio José</p>
} else if(props.lang==="fr"){
    return <p>Bonjour François</p>
}
}

export default Greetings;