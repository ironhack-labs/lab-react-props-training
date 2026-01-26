function IdCard(props) {
    return (
        <div className="IdCard">
            <img src= {props.picture} />
            <p><strong>Last name:</strong> {props.lastName} 
            <strong>First name:</strong> {props.firstName} 
            <strong>Gender:</strong> {props.gender} 
            <strong>Height:</strong> {props.height} cm 
            <strong>Birthdate:</strong> {props.birth.toDateString()}</p>
        </div>
    )
}

export default IdCard;