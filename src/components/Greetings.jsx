import data from "../data/berlin.json";

function Greetings(props){

    const greetings = {
        de : "Hallo",
        en : "Hello",
        es : "Hola",
        fr : "Bonjour"
    };

    const countryToLang = {
        "Germany" : "de",
        "Spain" : "es",
        "France" : "fr",
        "USA" : "en"
    };


    return (
        <div className="greetings">
            {data.map((person, index)=>{
                return(
                    <section key={index}>
                    <p className="hello">{greetings[countryToLang[person.country] || "en"]} {person.firstName}</p>
                </section>
                )
            })
            }
        </div>
    )

}

export default Greetings