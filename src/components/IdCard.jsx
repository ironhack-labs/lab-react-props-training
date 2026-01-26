function IdCard(props){
    return (
        <div className="card" >
            <img class="image" src={props.picture} alt="photo"/>
            <div class="info">
                <h1>Last Name: <span className="data">{props.lastName}</span></h1>
                <h1>First Name: <span className="data">{props.firstName}</span></h1>
                <h1>Gender: <span className="data">{props.gender}</span></h1>
                <h1>Height: <span className="data">{props.height}</span></h1>
                <h1>Birth: <span className="data">{props.birth.toDateString()}</span></h1>
            </div>
            
        </div>
    )
}

export default IdCard