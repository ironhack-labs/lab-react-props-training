function IdCard (props){
    return (
        <div className="IdCard">
            <p>Last Name : {props.lastName}</p>
            <p>First Name :{props.firstName}</p>
            <p>Gender - if specified : {props.gender}</p>
            <p> Height : {props.height}</p>
            <p>Birth : {props.birth}</p>
            <p>Picture : {props.picture}</p>
        </div>
    )
}