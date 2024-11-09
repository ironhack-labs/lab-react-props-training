import "./IdCard.css"

function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="idcard">
            <img className="picture" src={picture} alt="picture"/>
            <div>
                <p><span className="bold">First name:</span> {firstName}</p>
                <p><span className="bold">Last name:</span> {lastName}</p>
                <p><span className="bold">Gender:</span> {gender}</p>
                <p><span className="bold">Height:</span> {height}</p>
                <p><span className="bold">Birth:</span> {birth.toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;