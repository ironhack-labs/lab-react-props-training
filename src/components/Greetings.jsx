function Greetings({lang,children}) {
    if (lang === "fr"){
        return <p>Bonjour {children}</p>
    }
    if (lang === "en"){
        return <p>Hello {children}</p>
    }
    if (lang === "es"){
        return <p>Hola {children}</p>
    }
    if (lang === "de"){
        return <p>Hallo {children}</p>
    }
      
  }
  
  export default Greetings;
  