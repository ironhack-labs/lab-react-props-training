import "./DriverCard.css";
import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {
    return (
        <div className="driver-card">
            <div className="driver-picture-container">
                <img className="profile-picture" src={img} alt="profile-picture" />
            </div>
            <div className="car-text-container">
                <p className="name">{name}</p>
                <p className="rating"><Rating>{rating}</Rating></p>
                <p className="car-model">{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;