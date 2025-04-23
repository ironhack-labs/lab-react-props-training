export default function Greetings(props){
    const lang = {
        en: "hello",
        es: "hola",
        de: "hallo",
        fr: "bonjour",
    };
    const bla = lang[props.lang]
    return (
<>
<p>{bla}</p>
<p>{props.children}</p>
</>
    )
}