

function Card(props) {
    console.log(props)

    return (
        <div className="card">
            <img id="img" src={props.picture} alt="image"></img>
            <section id="text">
                <p><b>First Name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}m</p>
                <p><b>Birth:</b> {props.birth}</p>
            </section>
        </div>
    )
}

export default Card