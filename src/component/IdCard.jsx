function IdCard(props){
    return(
        <div className="card">
            <img src={props.picture} alt={props.firstName + ' Profile Picture'} />
            <div className="text-block">
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}m</p>
            <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
            </div>
        </div>
    );
}
export default IdCard;