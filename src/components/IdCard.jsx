import "./components.css"

function IdCard (props) {
    return (
    <div className="id-card">
        <img src={props.picture} alt="profile picture" />
        <div className="id-details">
            <p><strong>First Name:</strong> {props.firstName}</p>
            <p><strong>Last Name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Birth:</strong> {props.birth}</p>
        </div>
    </div>
    )
}

export default IdCard