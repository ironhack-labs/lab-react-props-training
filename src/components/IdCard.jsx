function IdCard (props) {
    return (
        <div className="box">
            <div className="photo">
            <img src={props.picture} alt="" />
            </div>
            <div className="idData">
            <p>lastName: {props.lastName} </p>
            <p>firstName: {props.firstName} </p>
            <p>gender: {props.gender} </p>
            <p>height: {props.height} </p>
            <p>birth: {props.birth.toDateString()} </p>
            </div>
        </div>
    )
}

export default IdCard