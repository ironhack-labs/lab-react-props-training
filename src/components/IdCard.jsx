function IdCard (props){

    return (
        <div className="idCard">
            <img src={props.picture} atl={'${firstName} ${lastName}'} />
            <div>
                <p><b>First Name:</b> {props.firstName} </p>
                <p><b>Last Name:</b> {props.lastName} </p>
                <p><b>Gender:</b> {props.gender} </p>
                <p><b>Height:</b> {props.height} cm </p>
                <p><b>Birth:</b> {props.birth.toDateString()} </p>

            </div>
        </div>
    )
}


export default IdCard;