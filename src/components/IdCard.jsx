function IdCard(props) {
    return (

        <div className="idInfo">
            <div className="idImg">
                <img src={props.picture} alt="picture" />
            </div>
            <div className="idText"> 
            <p><span className="label">First Name:</span> {props.firstName}</p>
            <p><span className="label">Last Name:</span> {props.lastName}</p>
            <p><span className="label">Gender: </span>{props.gender}</p>
            <p><span className="label">Height: </span>{props.height/100}m</p>
            <p><span className="label">Birth: </span>{props.birth.toDateString()}</p>
         </div>
         </div>
    )
}

export default IdCard