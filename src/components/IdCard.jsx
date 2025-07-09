function IdCard(props) {
    return (
    <div className="id-card">
        <img src={props.picture} alt={`${props.firstName} ${props.lastName}`}/>
        <div className="id-card-details">
            <p>Last name: {props.lastName}</p>
            <p>First name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
        </div>
    </div>
    );
}

export { IdCard };
