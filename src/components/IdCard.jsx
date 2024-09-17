
function IdCard(props){

    return (
        <div className="card">
            <img src={props.picture} alt="person picture" />
            <ul>
                <li><span style={{fontWeight: "bold"}}>First name: </span>{props.firstName}</li>
                <li><span style={{fontWeight: "bold"}}>Last name: </span>{props.lastName}</li>
                <li><span style={{fontWeight: "bold"}}>Gender: </span>{props.gender}</li>
                <li><span style={{fontWeight: "bold"}}>Height: </span>{props.height}m</li>
                <li><span style={{fontWeight: "bold"}}>Birth: </span>{props.birth.toDateString()}</li>
            </ul>
        </div>
    );

}

export default IdCard;