function IdCard(props){

    return(
        <div id="id-card">
            <img src={props.picture} />
            <div id="id-info">
                <p>First name: <span>{props.firstName}</span></p>
                <p>Last name: <span>{props.lastName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height: <span>{props.height}</span></p>
                <p>Birth: <span>{props.birth}</span></p>
            </div>
        </div>
    )

}

export default IdCard;