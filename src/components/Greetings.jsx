import Language from "./Language";

function Greetings() {


    return (
        <>

            <Language lang={'de'} children={'Hallo Ludwig'} />
            <Language lang={'fr'} children={'Bonjour François'} />
            <Language lang={'en'} children={'Good Morning'} />
            <Language lang={'es'} children={'Buenos Dias'} />

        </>
    )
}



export default Greetings;