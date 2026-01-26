export const IdCard = (props) => {
    return (
    <div className="container">
        <div className="card-info">
            <p><b>First name:</b> {props.firstName}</p>
            <p><b>Last name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth.toLocaleDateString()}</p>
        </div>
        <img className="id-card-img" src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
    </div>
    );
}