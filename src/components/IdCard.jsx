function IdCard(props) {
    const formattedBirthday = props.birth.toDateString();
   return (
    <div>
        <h5>{props.lastName} </h5>
        <h5>{props.firstName} </h5>
        <h5>{props.gender} </h5>
        <h5>{props.height} </h5>
        <h5>{formattedBirthday} </h5>
        <img src = {props.picture} />
    </div>
    )
}

export default IdCard