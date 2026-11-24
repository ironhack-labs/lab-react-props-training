import "./id-card.css"
function IdCard(props) {
    return(
        <div className="IdCard">
        <img src={props.picture}/>
        <div className="data"> 
            <div>
                <strong>First name:</strong>{props.firstName}
            </div>
            <div>
                <strong>Last name: </strong> {props.lastName}
            </div>
            <div>
                <strong>Gender: </strong> {props.gender}
            </div>
            <div>
                <strong>Height: </strong> {props.height}
            </div>
            <div>
                <strong>Nationality: </strong> {props.nationality}
            </div>
            <div>
                <strong>Birth: </strong> {props.birth.toDateString()}
            </div>
        </div>
    </div>
)
}
export default IdCard;