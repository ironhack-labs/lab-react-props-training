function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div>
            <img src={picture} alt={`${firstName} ${lastName}`} />

            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height / 100}m</p>
            <p><strong>Birth:</strong> {birth.toDateString()}</p>      
        </div>
    );
}

export default IdCard;