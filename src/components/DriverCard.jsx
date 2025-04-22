export const DriverCard = (props) => {
    const rounded = Math.round(props.rating);
    const totalStars = 5;
    const stars = "★".repeat(rounded) + "☆".repeat(totalStars - rounded);

    return (
        <div className="container driver">
            <div className="card-info">
                <h1 className="drivername">{props.name}</h1>
                <p className="driver-rating">{stars}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
            <img className="driver-card-img" src={props.img} alt={props.name} />
        </div>
    );
}