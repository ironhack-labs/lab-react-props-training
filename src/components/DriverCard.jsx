import Rating from "./Rating";

function DriverCard(props){
    return(
        <div id="driver-card">
           <img src={props.img} alt="" /> 
           <div className="flex-column">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model  + " - " + props.car.licensePlate} </p>
           </div>
        </div>
    );
}

export default DriverCard;