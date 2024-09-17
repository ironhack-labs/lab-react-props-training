function IdCard (props) {
    return (
        <div style={{display:"flex",border:"2px solid black", alignItems: "center", marginBottom: "10px", width: 600}}>
            <div>
                <img src= {props.picture} width={170} height={170}></img>
            </div>
            <div>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}cm</p>
                <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;