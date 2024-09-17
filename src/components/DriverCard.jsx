import Rating from "./Rating"
import "./DriverCard.css"

function DriverCard(props) {
  return (
    <div className="container">
        <img src= {props.img} alt="" />
        <div className="texto">
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard