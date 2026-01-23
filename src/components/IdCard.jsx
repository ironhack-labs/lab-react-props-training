function IdCard(props){
    return (
        <div className="idCard">
            <p>Last Name: {props.lastName}</p>
            <p>First Name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Date of Birth: {props.birth}</p>
            <img src={props.picture} />
        </div>
    )
}

export default IdCard;