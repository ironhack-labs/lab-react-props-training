import "./Greetings.css"
function Greetings ({lang, children}) {
   const greeting = {
    de: "Hallo",
    en: "Hello",
    es: "Eres cojonudo",
    fr: "Bonjour"
  }

  return (
    <div className="greeting">
      {greeting[lang]} {children}
    </div>
  )
}

export default Greetings