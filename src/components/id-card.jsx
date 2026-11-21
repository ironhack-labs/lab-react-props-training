function IdCard (props) {
    return <div className="profile">
            <img src={props.picture} />
            <div className="data">
                <div> <span>Firts Name: </span>{props.firstName}</div>
                <div> <span>Last Name: </span>{props.lastName}</div>
                <div> <span>Gender: </span> {props.gender}</div>
                <div> <span>Height: </span>{props.height}</div>
                <div> <span>Birth: </span>{props.birth.toDateString()}</div>
            </div>
        </div>
}

export default IdCard