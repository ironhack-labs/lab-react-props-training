function Greetings ({lang, children}) {

    let greeting;
if (lang==="de"){
    greeting = "Hallo" 
}
else if (lang==="en"){
    greeting = "Hello"
}
else if (lang==="es"){
    greeting = "Hola"
}
else if (lang==="fr"){
    greeting = "Bonjour"
}
  return (
    <div>
      {greeting} {children}
    </div>)
}

export default Greetings