import "./IdCard.css"


function IdCard({ firstName, lastName, gender, height, birth, picture }) {

    return (

        <div className="id-card">
            <img src={picture} alt={firstName} />

            <div>
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gener:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>        

    )
}

export default IdCard