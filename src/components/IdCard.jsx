import Card from "./Card"



function IdCard() {

    function getDate(date) {
        return date.toDateString()
    }

    return (
        <>
            {/*<div className="card">
            <img id="img" src="https://randomuser.me/api/portraits/men/44.jpg" alt="image"></img>
            <section id="text">
                <p><b>First Name:</b> Jonh</p>
                <p><b>Last Name:</b> Doe</p>
                <p><b>Gender:</b> male</p>
                <p><b>Height:</b> 1.78</p>
                <p><b>Birth:</b> 1992-07-14</p>
            </section>
    </div>*/}

            <Card
                firstName={'Bob'}
                lastName={'Doe'}
                gender={'male'}
                height={1.78}
                birth = {getDate(new Date("1992-07-14"))}
                picture="https://randomuser.me/api/portraits/men/44.jpg" />

            <Card
                firstName={'Delores'}
                lastName={'Obrien'}
                gender={'female'}
                height={1.72}
                birth={getDate(new Date("1988-05-11"))}
                picture="https://randomuser.me/api/portraits/women/44.jpg"/>
        </>

    )


}

export default IdCard