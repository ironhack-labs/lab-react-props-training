import Rating from "./Rating"

function DriverCard({ name, rating, img, car }) {

  return (
    <div className="driver-card">
      <div className="driver-image">
        <img src={img} />
      </div>
      <div className="driver-info">
        <h4 className="driver-name">{name}</h4>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard