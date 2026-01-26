function IdCard(props) {
    return (
        
        <h3 class = "container" >
            <img src={props.person.picture} />
            <br />
            First Name: {props.person.firstName}
            <br />
            Last Name: {props.person.lastName}
            <br />
            Gender: {props.person.gender}
            <br />
            Height: {props.person.height}
            <br />
            Birth: {props.person.birth}
        </h3>

    )
}

export default IdCard

