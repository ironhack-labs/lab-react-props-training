function IdCard (props) {
    return (
        <div>
            <p><strong>First Name: </strong>{props.user.firstName}</p>
            <p><strong>Last Name: </strong>{props.user.lastName}</p>
            <p><strong>Gender: </strong>{props.user.gender}</p>
            <p><strong>Height: </strong>{props.user.height}</p>
            <p><strong>Birth: </strong>{props.user.birth}</p>
            <img src= {props.user.picture}></img>
        </div>
    )
}

export default IdCard