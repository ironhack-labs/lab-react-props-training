import Rating from "./Rating";
export default function DriverCard(props){
    return(
        <div className="driverCard">
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="content">
                <h1>{props.name}</h1>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}