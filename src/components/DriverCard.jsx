import Rating from "./Ratings";

function DriverCard({name, rating, img, car}) {
  return (
    <div className="driver-card">
        <div className="driver-card-info">
            <img src={img} alt="" />
            <div className="driver-card-text">
                <p className="driver-name">{name}</p>
                <div className="driver-rating"><Rating>{rating}</Rating></div>
                <div className="driver-car">
                    {car.model} - {car.licensePlate}
                </div>
            </div>
        </div>
    </div>
  )
}
export default DriverCard