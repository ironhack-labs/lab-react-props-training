import "./DriverCard.css";
import Rating from "./Rating";

function DriverCard (props) {
    console.log("Children:", props.children);
    return (
        <div className="driverCard">
            <ul className= "driver-ul">
                <li>{props.name}</li>
                <li><Rating>{props.rating}</Rating></li>
                <li><img width={"100px"} src = {props.img} alt = "driver picture"/></li>
                <li>{props.car.model} - {props.car.licensePlate}</li>
            </ul>
        </div>
    )
}

export default DriverCard