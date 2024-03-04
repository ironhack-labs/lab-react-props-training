 const Greetings = ({lang, children}) => {
    const greetings = {
        de: `Hallo ${children}`,
        fr: `Bonjour ${children}`,
        es: `Hola ${children}`,
        en: `Hello ${children}`
    } 
  return (
    <div>
    {greetings[lang]}
    </div>
  )
}
export default Greetings