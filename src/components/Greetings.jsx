export function Greetings (props) {
    return (
        <div> 
            <h1>
                {props.lang === "pt" && "Oi"}
                {props.lang === "fr" && "Bonjour"}
                {props.lang === "en" && "Hello"}
                {props.lang === "ru" && "Привет"}
                {props.lang === "es" && "Hola"}
                {props.children}
            </h1>
        </div>
    )
}