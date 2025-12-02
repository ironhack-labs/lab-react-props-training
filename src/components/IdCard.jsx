function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

    const formattedBirth = birth.toDateString();

    return (
        <div
            className="id-card"
            style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "400px",
            }}
        >
            <img
                src={picture}
                alt={`${firstName} ${lastName}`}
                style={{ width: "100px", marginRight: "10px" }}
            />
            <div>
                <p><strong>First name:</strong>{firstName}</p>
                <p><strong>Last name:</strong>{lastName}</p>
                <p><strong>Gender</strong>{gender}</p>
                <p><strong>Height</strong>{height}</p>
                <p><strong>Birth</strong>{formattedBirth}</p>
            </div>
        </div>
    )
}

export default IdCard;