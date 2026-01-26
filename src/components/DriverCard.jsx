import { Rating } from "./Rating"

export function DriverCard ({name, rating, img, car}) {
    return (
    <div className="drivers">
        <div className="driver-cards">
            <img src={img} alt="photo" />
            <div className="driver-details">
                <p><strong>{name}</strong></p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    </div>
    )
}