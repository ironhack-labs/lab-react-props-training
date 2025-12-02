function IdCard(props) {

    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div className="IdCard" style={{ border: "2px solid #000000ff", padding: "10px", margin: "5px", display: "flex", gap: "15px", width: "80%" }}>
            <img src={picture} alt={`${firstName} ${lastName}`} width="150" />
            <div>
                <p style={{ margin: "2px" }}><strong>First name:</strong> {firstName} </p>
                <p style={{ margin: "2px" }}><strong>Last name:</strong> {lastName}</p>
                <p style={{ margin: "2px" }}><strong>Gender:</strong> {gender}</p>
                <p style={{ margin: "2px" }}><strong>Height:</strong> {height}</p>
                <p style={{ margin: "2px" }}><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>

    )
}

export default IdCard