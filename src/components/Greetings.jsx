export function Greetings ({lang, children}) {
    return (
        <div className="greetings">
            {lang === "de" && <h1>Hallo {children}</h1>}
            {lang === "en" && <h1>Hello {children}</h1>}
            {lang === "es" && <h1>Hola {children}</h1>}
            {lang === "fr" && <h1>Salut {children}</h1>}
        </div>
    )
}