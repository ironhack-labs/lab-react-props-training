
function IdCard(props) {
    // const {firstName, lastName, gender, height, birth, picture} = props

    return (
        <div className="IdCard" style ={{display: "flex", border: "2px solid black"}}>
          <div>
          <img src={props.picture} width={300} height={300}/>
          </div>
          <div className="id-content">
            <p><span className="strong">First Name:</span> {props.firstName}</p>
            <p><span className="strong">Last Name:</span> {props.lastName}</p>
            <p><span className="strong">Gender:</span> {props.gender}</p>
            <p><span className="strong"> Height:</span> {props.height}cm</p>
            <p><span className="strong">Birth:</span> <span>{props.birth.toDateString()}</span></p>
         </div>
        </div>
    )
}

export default IdCard;