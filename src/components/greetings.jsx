function Greetings({ lang, children}) {

  const greetings = {
    es: "Hola",
    en: "Hello",
    fr: "Bonjour",
    de: "Hallo"
  };


  return (
    <>
    <p className="box">{greetings[lang]} {children}</p>
    </>
  )
}

export default Greetings