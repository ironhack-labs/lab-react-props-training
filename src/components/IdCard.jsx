function IdCard(props) {


    return (
        <h3 class = "container">
            <img src={props.person.picture}/> <br/>
            lastName: {props.person.lastName} <br/>
            firstName: {props.person.firstName}<br/>
            gender: {props.person.gender} <br/>
            height: {props.person.height} <br/>
            birth: {props.person.birth} <br/>
        </h3>


    )
}

export default IdCard;