export function IdCard ({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className="id-card">
            <img src={picture} alt="profile" />
            <div>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}cm</p>
                <p><strong>Birth:</strong> {new Date(birth).toDateString()}</p>
            </div>
        </div>
    );
    };
