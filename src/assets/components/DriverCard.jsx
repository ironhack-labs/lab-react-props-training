import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <div className="driver-daten">
        <img className="profile-img" src={img} />
        <div className="driver-information">
          <p className="driver-name">{name}</p>
          <div className="driver-rating">
            <Rating>{rating}</Rating>
          </div>
          <p className="car-daten">
            {car.model} - <span>{car.licensePlate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
