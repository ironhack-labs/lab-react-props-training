function IdCard(props){

    return(
        <div>
            <img src={props.person.picture} alt="Id Card" />
            <p>Name: {props.person.firstName}</p>
            <p>Last Name: {props.person.lastName}</p>
            <p>gender: {props.person.gender}</p>
            <p>Birth: {props.person.birthDate}</p>
        </div>
    );
};

export default IdCard;