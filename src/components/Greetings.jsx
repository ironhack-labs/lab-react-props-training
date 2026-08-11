function Greetings({children, lang}){
    const messages = {
  de: "Hallo",
  en: "Hello",
  es: "Hola",
  fr: "Bonjour"
};
return(
    <p>{messages[lang]} {children}</p>
);
}
export default Greetings;