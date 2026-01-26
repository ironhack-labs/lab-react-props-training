import Rating from "./Rating"

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img src={props.img} alt="Driver picture" />

      <div className="driver-info">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard