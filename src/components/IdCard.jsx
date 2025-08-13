function IdCard(props){

    return(
        <div className="card">
            <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
            <div className="card-text">
            <p><span>First Name: </span>{props.firstName}</p> 
            <p><span>Last Name: </span>{props.lastName}</p> 
            <p><span>Gender: </span>{props.gender}</p> 
            <p><span>Height: </span>{props.height}</p> 
            <p><span>Birth: </span>{props.birth.toDateString()}</p> 
            </div>
        </div>
    )

}
export default IdCard