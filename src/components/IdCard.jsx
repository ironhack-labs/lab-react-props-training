function IdCard(props){
    return (
        <div>
            <img src= {props.person.picture} alt="imageForIdCard" />
            <div>
                <p>First Name: {props.person.firstName}</p>
                <p>Last Name: {props.person.lastName}</p>
                <p>Gender: {props.person.gender} </p>
                <p>Height: {props.person.height}</p>
                <p>Birth: {props.person.birth}</p>
            </div>
        </div>
    )
}

export default IdCard