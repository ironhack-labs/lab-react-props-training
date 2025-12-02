import Rating from "./Rating";

function DriverCard(props) {
    return (
        <div className="driver-card">
            <img
                className="driver-card__img"
                src={props.img}
                alt={props.name}
            />

            <div className="driver-card__info">
                <h2>{props.name}</h2>

                <Rating>{props.rating}</Rating>

                <p>
                    {props.car.model} - {props.car.lincesePlate}
                </p>
            </div>
        </div>
    );
}

export default DriverCard;