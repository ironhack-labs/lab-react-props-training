import Rating from './rating';
import './rating.css'

function DriverCard (props) {

    let rating = Math.round(props.rating)

    return <div className="driverCar">
        <div className="photo"><img src={props.img} /></div>
        <div className="driversInfo">
            <div className="driversName"> {props.name} </div>
            <div className="driversRating"> <Rating>{rating}</Rating> </div>
            <div className="car"> {props.car.model} - {props.car.licensePlate} </div>
        </div>
    </div>
}

export default DriverCard