function Greetings({lang, children}) {
  const greetings ={
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  }
  return (<div style={{border:"1px solid black", padding: "8px", margin: "5px"}}>{greetings[lang]}, {children}!</div>)
}
export default Greetings