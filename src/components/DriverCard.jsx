import Rating from "./Rating";

function CreditCard(props) {

    return(
        <div className="DriverBox">
            <img src={props.img} alt="DriverImg" />
            <div className="contentInfo">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}

export default CreditCard;