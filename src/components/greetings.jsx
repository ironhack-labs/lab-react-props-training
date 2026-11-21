import "./greetings.css"

function Greetings({ lang, children}) {

  const greetings = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour",
    de: "Hallo"
  };


  return (
    <>
    <p className="greeting">{greetings[lang]} {children}</p>
    </>
  )
}

export default Greetings