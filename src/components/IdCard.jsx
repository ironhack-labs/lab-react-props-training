import './IdCard.css'

function IdCard(props) {

    return (

        <div id="card">
            <img src={props.picture}/>
            <p>First name:<span>{props.firstName}</span> </p>
            <p>Last Name:<span>{props.lastName}</span> </p>
            <p>Gender: <span>{props.gender}</span></p>
            <p>Height: <span>{props.height}</span></p>
            <p>Birth: <span>{props.birthday}</span></p>


        </div>
    )
}

export default IdCard