function IdCard(props){
    return (
    <div className="UserId">
    <img src={props.picture} alt="Id picture"/>
    <ul>
    <li>First Name: {props.firstName}</li>
    <li>Last Name: {props.lastName}</li>
    <li>Gender: {props.gender}</li>
    <li>Height:{props.height} </li>
    <li>Birth: {props.birth}</li>
    </ul>
    </div>
    )
}

export default IdCard;