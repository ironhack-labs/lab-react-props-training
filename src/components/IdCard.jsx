function IdCard({ lastName, firstName, gender, height, birth, picture}) {
    return (
        <div>
            <img src={picture} alt={`${firstName} ${lastName}`} />

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height} cm</p>
            <p>Birthday: {birth.toDateString( )}</p>
        </div>
    );
}

export default IdCard;
