
function IdCard(props) {
    return(
        <div class = "id-card">
            <img src={props.picture} alt="" />
            <section>
            <p><b>First name: </b>{props.firstName}</p>
            <p><b>Last name: </b>{props.lastName}</p>
            <p><b>Gender: </b>{props.gender}</p>
            <p><b>Height: </b>{props.height/100}m</p>
            <p><b>Birth: </b>{props.birth.toDateString()}</p>  
            </section>
        </div>
    )
}


export default IdCard