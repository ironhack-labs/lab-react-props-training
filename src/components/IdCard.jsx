
function IdCard(props) {
    return (
    <div>
        <img src={props.picture}></img>
        <span>{props.lastName}</span>
        <span>{props.firstName}</span>
        <span>{props.gender}</span>
        <span>{props.height}</span>
        <span>{props.date}</span>
        
    </div>
        
    )
}

export default IdCard;