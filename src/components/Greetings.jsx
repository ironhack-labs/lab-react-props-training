export function Greetings(props) {
    console.log(props)
    return (
    <>
    {props.lang==="de" ? <h1>Hallo {props.children}</h1> : <h1>Bonjour {props.children}</h1>
  
}
</>
    )
}
