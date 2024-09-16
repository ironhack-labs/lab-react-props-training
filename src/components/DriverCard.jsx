import Rating from "./Rating";

function DriverCard(props) {
    return (
        <div className="rectangle">
            <img src={props.img} alt="picture" id="rect-img"/>
            <div id="info">
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;