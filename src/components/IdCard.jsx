function IdCard (props) {


    return (
        <div className="IdCard box">
            <img src={props.picture} />
            <div className="info">
            <p>First name: <span>{props.firstName}</span></p>
            <p>Last name: <span>{props.lastName}</span></p>
            <p>Gender: <span>{props.gender}</span></p>
            <p>Height: <span>{props.height}m</span></p>
            <p>Birth: <span>{props.birth}</span></p>
            </div>
        </div>
    )
}

export default IdCard;