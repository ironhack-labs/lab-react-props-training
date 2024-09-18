import Rating from "./Rating.jsx"; 

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-img" />
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;