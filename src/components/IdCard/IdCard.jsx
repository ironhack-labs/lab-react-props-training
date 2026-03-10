import './IdCard.css'

function IdCard (props) {
    return  <div id="container1">
                <div id="img-container">
                    <img src={props.picture} alt="picture" />
                </div>
                <div id="info-container">
                    <p><strong>First Name:</strong> {props.firstName}</p>
                    <p><strong>Last Name:</strong> {props.lastName}</p>
                    <p><strong>Gender:</strong> {props.gender}</p>
                    <p><strong>Height:</strong> {props.height}</p>
                    <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
                </div>
            </div>
}

export default IdCard