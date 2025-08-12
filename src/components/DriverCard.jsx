import Rating from "./Rating";

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
  return (
    <div className="driver-container">
      <img src={img} alt="Profile image" />
      <div className="driver-info">
        <p className="driver-name">{name}</p>
        <Rating>{rating}</Rating>
        <p className="car-info">
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}
export default DriverCard;
