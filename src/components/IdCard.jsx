
function IdCard(props) {
    return (
        <div className="idCard" >
        <img 
        src= {props.picture}
        className="idCard-img" />
        <div className="idCard-info">
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}m</p>
                <p><strong>Birth:</strong> {new Date(props.birth).toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;
