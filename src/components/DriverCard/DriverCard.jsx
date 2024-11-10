import Rating from "../Rating/Rating";
import "./DriverCard.css"

function DriverCard ({name, rating, img, car}) {
    return (
        <div className="driver-card">
            <img className="profile-img" src={img} />
            <div className="driver-card-info>">
                <h3 className="name">{name}</h3>
                <Rating className="driver">{rating}</Rating>
                <p className="car">{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;